import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-app-scan-test',
  imports: [],
  templateUrl: './app-scan-test.html',
  styleUrl: './app-scan-test.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppScanTest implements AfterViewInit {
  openCam() {
    const scannerContainer = document.querySelector('.scanner-container') as HTMLElement;
    const cameraElement: any = document.getElementById('document-camera');
    scannerContainer.classList.remove('hidden');
    cameraElement.configuration = {
      assetsDirectoryPath: '/assets',

      camera: {
        facingMode: 'environment',
      },

      onComplete: (result: any) => {
        console.log(result);
        this.closeCam(scannerContainer);

        // const video =
        //   document.querySelector('video');

        // const stream =
        //   video?.srcObject as MediaStream;

        // stream?.getTracks().forEach(track => {
        //   track.stop();
        // });

        this.continueDetection();
      },

      onError: (error: any) => {
        console.error(error);
      },
    };
  }

  ngAfterViewInit(): void {}

  continueDetection() {
    document.dispatchEvent(
      new CustomEvent('document-auto-capture:control', {
        detail: { instruction: 'continue-detection' },
      }),
    );
  }

  closeCam(container: HTMLElement) {
    container.classList.add('hidden');
  }
}
