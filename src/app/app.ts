import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Device } from '@capacitor/device';
import { AppScanTest } from "./app-scan-test/app-scan-test";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppScanTest],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('device-id-demo-capacitor');
  deviceId = signal<string>('');

  constructor() {
    this.loadDeviceId();
  }

  async loadDeviceId() {
    const info = await Device.getId();
    this.deviceId.set(info.identifier);
  }
}
