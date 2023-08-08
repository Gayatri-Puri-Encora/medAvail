let browser = Aliases.browser;
let spnrxTask = browser.SpnRxPage;

function selectRequiredCheckbox(){
  spnrxTask.requiredCheckbox.ClickChecked(true);
  aqObject.CheckProperty(spnrxTask.requiredCheckbox, "value", cmpEqual, "on");
  aqObject.CheckProperty(spnrxTask.submitButton, "className", cmpContains, "glowShow");
  Log.Message("Clicked on Required Checkbox");
}

function clickOnSubmitButton(){
  
  spnrxTask.submitButton.ClickButton();
  aqObject.CheckProperty(spnrxTask.confirmSelectedRxsAndOtcsPopUp, "Exists", cmpEqual, true);
  Log.Message("Clicked on Submit Button");
}

function confirmRx()
{
  spnrxTask.confirmButton.Click();  
  aqObject.CheckProperty(Aliases.browser.commonControls.contactCenterAgentText, "contentText", cmpEqual, "Contact Center Agent");
  Log.Message("Clicked on Confirm button");
}

module.exports.selectRequiredCheckbox = selectRequiredCheckbox;
module.exports.clickOnSubmitButton = clickOnSubmitButton;
module.exports.confirmRx = confirmRx;

