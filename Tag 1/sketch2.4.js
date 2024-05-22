function preload() {
    original  = loadImage('../pessi.jpg');
  }
  
  function setup() {
    let imageWidth = 800 
    
    original.resize(imageWidth, 0)
    createCanvas(original.width, original.height);
    
    frameRate(10)
  }
  
  function draw() {
    randomSeed(2001)
    background(200)
    let thresh = map(mouseX, 0, width, -255, 255, true)
    
    let proxy = createImage(original.width, original.height)
    
    original.loadPixels()
    proxy.loadPixels()
     for (let y = 0; y < original.height; y++) {
      for (let x = 0; x < original.width; x++) {
        let r = 0 + (x * 4) + (y * original.width * 4)
        let g = 1 + (x * 4) + (y * original.width * 4)
        let b = 2 + (x * 4) + (y * original.width * 4)
        let a = 3 + (x * 4) + (y * original.width * 4)
        
        // Determine the pixel value
        let pixelValue = (original.pixels[r] + original.pixels[g] + original.pixels[b]) / 3
        let newPixelValue = 0
        if (random(255) < pixelValue - thresh ) {
          newPixelValue = 255
        }
        
        // Write the pixel
        proxy.pixels[r] = newPixelValue
        proxy.pixels[g] = newPixelValue
        proxy.pixels[b] = newPixelValue
        proxy.pixels[a] = 255
        
      }
    }
    original.updatePixels()
    proxy.updatePixels()
    
    image(proxy, 0, 0)
    
  }