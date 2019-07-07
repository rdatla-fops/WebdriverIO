import Page from './page'

class ErrorPage extends Page {

    get JobListPage_logo ()                         { return $('//a[@class="active"]'); }
    get ErrorPage_ErrorCode_UI ()                   { return $('//*[text()="Job Fabrik"]//following::h1'); }
    get ErrorPage_ErrorMessage_UI ()                { return $('//*[text()="Job Fabrik"]//following::p'); }
    get ErrorPage_GoBackToHomePage_Button ()        { return $('//span[text()="Go back to homepage"]'); }
    
    
    open_Page () {
      super.open('foo')       //this will append e.g foo to the baseUrl in browser
      browser.pause(3000);    // Pause used for human visibility of browser execution otherwise we can remove this
    
  }
    waitFor_Header_logo_ToLoad () {
      if(!this.JobListPage_logo.isDisplayed()){
        this.JobListPage_logo.waitForDisplayed(5000);
      }
    }

    click_on_GoBackToHomePage_Button(){
     this.ErrorPage_GoBackToHomePage_Button.click();
     this.waitFor_Header_logo_ToLoad();
    }
    get_ErrorCode_Text_From_UI(){
      return this.ErrorPage_ErrorCode_UI.getText();
    }

    get_ErrorMessage_Text_From_UI(){
      return this.ErrorPage_ErrorMessage_UI.getText();
    }
}

export default new ErrorPage()