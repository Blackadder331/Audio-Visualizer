# Audio-Visualizer

Source: https://blog.logrocket.com/audio-visualizer-from-scratch-javascript/

# Summary

1. Introduction:

- Audio visualizers are a great way to enhance music listening experience.
- This article explains how to create an audio visualizer using vanilla JavaScript and inbuilt browser Canvas and Web Audio APIs.

2. Building the Visualizer:

- Canvas and Web Audio APIs are used to build the visualizer.
- Canvas is an HTML5 element that allows drawing graphics on a webpage.
- Web Audio API allows processing and playing audio files directly in the browser.
- The HTML document contains canvas and audio elements.
- CSS styling is added to position the canvas element at the center of the screen.

3. Setting up the Project:

- A server is needed to bypass the CORS problem.
- Vite, a simple and straightforward dev server, is used in this tutorial.
- The HTML document contains canvas and audio elements.
- CSS styling is added to position the canvas element at the center of the screen.

4. Tuning the Performance:

- The article explains how digital audio works.
- Computers use sampling to turn sound into data that they can store.
- The computer recreates the sound from the recorded data points when playing back audio.
- The article explains how to tune the performance of the visualizer.

5. Adding Color and Polishing the UI:

- Color is added to the visualizer.
- The bars are resized to improve the UI.

6. Setting up the Entry File:

- The HTML document contains canvas and audio elements.
- CSS styling is added to position the canvas element at the center of the screen.
- The script.js file contains all the code for analyzing the audio and generating the visuals.

7. Initializing the Canvas and Audio Resources:

- References to the canvas and audio elements are set up.
- The canvas element is set to fill up the entire screen.
- The audio source, analyzer, and audio context objects are set up.

8. Setting up the Web Audio API Variables:

- The audio source, analyzer, and context are set up.
- The audio source is an AudioNode object that represents the source of the audio.
- The analyzer node helps understand what is happening with the sound.
- The audio context is responsible for managing all the Web Audio API nodes.

9. Creating the audioSource and analyser nodes:

- Set up the audio context
- Create the audioSource and analyser nodes
- Connect the nodes to form a chain

10. Calculating the visualizer's bar dimensions:

- Set the fftSize property of the analyser to 128
- Create a bufferLength variable and set it to the frequencyBinCount property of the analyser
- Create a dataArray variable and set it to a Uint8Array of the bufferLength size
- Create a barWidth variable and set it equal to the width of the canvas divided by the bufferLength

11. Animating the bars:

- Create an animate function
- Call getByteFrequencyData method on the analyser node to populate the dataArray with data from the sound
- Use a for loop to go through the dataArray array and draw a rectangle for each data point
- Call requestAnimationFrame method to loop the animate function

12. Adding color and polishing the UI:

- Experiment with dynamic values in the for loop to generate random colors
- Separate the for loop into its own function for better readability
- Split the data points into two halves to make higher bars rise from the middle
- Animate the left side with higher frequency bars on the right, and the right side with the higher frequency bars on the left

13. Creating an audio visualizer from scratch:

- Learned about the different parts of an analyzer node and what each one does
- Created a data array and animated it with the help of the animate function
- Made small improvements to the visualizer by changing the color and making bars taller in the middle

14. Improving performance with web workers:

- Offloaded heavy operations to background threads via Web Workers
- Used OffScreenCanvas to run most canvas tasks within the web worker’s context
- Highlighted the changes made to the code to implement web workers

15. Conclusion:

- Reviewed the process of creating an audio visualizer from scratch
- Suggested building an audio plugin from scratch as another project
- Provided instructions for setting up LogRocket's modern Javascript error tracking
