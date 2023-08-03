let browser = Aliases.browser;
let commonControls = browser.commonControls;

function VerifyUiOfEditImagesWindow()
{
  //Verify edit images header
  aqObject.CheckProperty(commonControls.editImagesHeader, "contentText" , cmpEqual, "Edit Images")
  
  //verify order collateral
  aqObject.CheckProperty(commonControls.orderCollateralHeader , "contentText" , cmpEqual, "Order Collateral")
  
  //verify zoom button from edit images window
  aqObject.CheckProperty(commonControls.editImagesZoomButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesZoomButton , "contentText" , cmpEqual , "Zoom")
  
  //verify magnify button from edit images window
  aqObject.CheckProperty(commonControls.editImagesMagnifyButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesMagnifyButton , "contentText" , cmpEqual , "Magnify")
  
  //verify crop button from edit images window
  aqObject.CheckProperty(commonControls.editImagesCropButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesCropButton , "contentText" , cmpEqual , "Crop")
  
  //verify Rotate left button from edit images window
  aqObject.CheckProperty(commonControls.editImagesRotateLeftButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesRotateLeftButton , "contentText" , cmpEqual , "Rotate Left")
  
  //verify Rotate Right button from edit images window
  aqObject.CheckProperty(commonControls.editImagesRotateRightButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesRotateRightButton , "contentText" , cmpEqual , "Rotate Right")
  
  //verify Brightness/Contrast button from edit images window
  aqObject.CheckProperty(commonControls.editImagesBrightnessContrastButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesBrightnessContrastButton , "contentText" , cmpEqual , "Brightness / Contrast")
  
  //verify Hue/Saturation button from edit images window
  aqObject.CheckProperty(commonControls.editImagesHueSaturationButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesHueSaturationButton , "contentText" , cmpEqual , "Hue / Saturation")
  
  //verify Hue/Saturation button from edit images window
  aqObject.CheckProperty(commonControls.editImagesScannedDocument , "exists" , cmpEqual , true );
  //aqObject.CheckProperty(commonControls.editImagesHueSaturationButton , "contentText" , cmpEqual , "Hue / Saturation")
  
  //verify Hue/Saturation button from edit images window
  aqObject.CheckProperty(commonControls.editImagesDownlodButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesDownlodButton , "contentText" , cmpEqual , "Download")
  
  //verify Hue/Saturation button from edit images window
  aqObject.CheckProperty(commonControls.editImagesPrintButton , "exists" , cmpEqual , true );
  aqObject.CheckProperty(commonControls.editImagesPrintButton , "contentText" , cmpEqual , "Print")
  
}

function zoomInAndZoomOutScannedImage()
{
  
}

function MagnifyScannedImage()
{
  
}

