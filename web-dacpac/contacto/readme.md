Añadir a la web 
------------------

formulario de verdad para contacto
Numero y mail: 
<div class="contactoredes">
  <p>O puedes contactarnos a traves de:</p>
  <p>🌐 Mail: correo@dacpac.com</p>
  <p>📞 Telefono: 666 666 666</p>
</div>

Google maps del sitio del campamento:
<!DOCTYPE html>
  <!--
   @license
   Copyright 2023 Google LLC. All Rights Reserved.
   SPDX-License-Identifier: Apache-2.0
  -->
  <html>
    <head>
      <title>Aerial View</title>
      <style>
        /**
         * @license
         * Copyright 2023 Google LLC. All Rights Reserved.
         * SPDX-License-Identifier: Apache-2.0
         */
        html,
        body {
          align-items: center;
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: center;
        }

        .aerial-view-media {
          object-fit: contain;
          height: 100%;
          width: 100%;
        }

        .container {
          display: flex;
          overflow: hidden;
          position: relative;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          max-height: 780px;
          max-width: 780px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <video class="aerial-view-media" muted autoplay loop>
          Your browser does not support HTML5 video.
        </video>
      </div>
    </body>
    <script>
      /**
       * @license
       * Copyright 2023 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      // To use video ID as parameter input instead of address, replace parameter value with a videoID '-wVXGP6Hkogfqz6sZulUf3'.
      const PARAMETER_VALUE = '1600 Amphitheatre Parkway, Mountain View, CA 94043';
      const API_KEY = 'INSERT_YOUR_API_KEY';

      async function initAerialView() {
        const displayEl = document.querySelector('video');
        displayEl.addEventListener('click', function () {
          if (displayEl.paused) {
          displayEl.play();
          } else {
            displayEl.pause();
          }
        });

        // Parameter key can accept either 'videoId' or 'address' depending on input.
        const parameterKey = videoIdOrAddress(PARAMETER_VALUE);
        const urlParameter = new URLSearchParams();
        urlParameter.set(parameterKey, PARAMETER_VALUE);
        urlParameter.set('key', API_KEY);
        const response = await fetch(`https://aerialview.googleapis.com/v1/videos:lookupVideo?${urlParameter.toString()}`);
        const videoResult = await response.json();

        if (videoResult.state === 'PROCESSING') {
          alert('Video still processing..');
        } else if (videoResult.error && videoResult.error.code === 404) {
          alert('Video not found. To generate video for an address, call on Aerial view renderVideo method.');
        } else {
          displayEl.src = videoResult.uris.MP4_MEDIUM.landscapeUri
        }
      }

      function videoIdOrAddress(value) {
        const videoIdRegex = /[0-9a-zA-Z-_]{22}/;
        return value.match(videoIdRegex) ? 'videoId' : 'address';
      }

      initAerialView();
    </script>
  </html>

