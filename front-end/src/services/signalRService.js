/*
 * services/signalRService.js
 *
 * اتصال SignalR مع ChatHub في الباكند.
 */

import * as signalR from '@microsoft/signalr';
import { getCurrentUserId } from './authService';

function getHubUrl() {
  if (process.env.REACT_APP_SIGNALR_URL) {
    return process.env.REACT_APP_SIGNALR_URL;
  }
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  return `${apiUrl.replace(/\/api\/?$/, '')}/chatHub`;
}

let connection = null;
let messageHandler = null;

async function registerCurrentUser(hub) {
  const userId = getCurrentUserId();
  if (!userId) return;
  await hub.invoke('RegisterUser', Number(userId));
}

export function getConnection() {
  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(getHubUrl())
      .withAutomaticReconnect()
      .build();

    connection.onreconnected(async () => {
      try {
        await registerCurrentUser(connection);
      } catch (err) {
        console.error('SignalR re-register failed:', err);
      }
    });
  }
  return connection;
}

export async function startSignalR(onMessage) {
  console.log("START SIGNALR");
  const hub = getConnection();
  messageHandler = onMessage;

  hub.off('ReceiveMessage');
  hub.on('ReceiveMessage', (payload) => {
    messageHandler?.(payload);
  });

  if (hub.state === signalR.HubConnectionState.Disconnected) {
    try {
      console.log("Starting SignalR...");
      console.log("Hub URL:", getHubUrl());
  
      await hub.start();
  
      console.log("SignalR Connected");
    } catch (err) {
      console.error("SignalR Start Error:", err);
      return;
    }
  }
  console.log("Current State:", hub.state);
  await registerCurrentUser(hub);
}

export async function stopSignalR() {
  console.log("STOP SIGNALR");
  if (!connection) return;

  connection.off('ReceiveMessage');
  messageHandler = null;

  if (connection.state !== signalR.HubConnectionState.Disconnected) {
    await connection.stop();
  }
}
