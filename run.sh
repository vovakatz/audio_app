#!/bin/bash

echo "starting backend and frontend services..."
(npx ts-node backend/src/server.ts) & (npm --prefix frontend run dev)

