import Page from './page'

class JobListPage extends Page {

    get JobListPage_logo ()                   { return $('//a[@class="active"]'); }
    get JobListPage_WelcomeMsg ()             { return $('//*[text()="Job Fabrik"]//following::h1'); }
    get  Element_with_job_CompanyName ()      { return $$('//span[contains(text(),"Click on an offer to see details")]//following::span/strong'); }
    get  Element_with_job_Pictures ()         { return $$('//span[contains(text(),"Click on an offer to see details")]//following::div/div/img'); }
    get Element_with_job_Description ()       { return $$('//span[contains(text(),"Click on an offer to see details")]//following::div/div/div'); }
    get  Element_with_job_Location ()         { return $$('//span[contains(text(),"Click on an offer to see details")]//following::div/div/span'); }
    get JobListPage_Job_Hyperlink ()          { return $('(//span[contains(text(),"Click on an offer to see details")]//following::div//a)[1]'); }
  
    open_JobListPage () {
        super.open('')       //this will open the baseUrl in browser
        browser.pause(2000);
      
    }

    waitFor_Header_logo_ToLoad () {
      if(!this.JobListPage_logo.isDisplayed()){
        this.JobListPage_logo.waitForDisplayed(5000);
      }
    }

    click_on_a_Available_Job(){
     this.JobListPage_Job_Hyperlink.click();
     this.waitFor_Header_logo_ToLoad();
    }
    get_Welcome_Msg_text(){
      return this.JobListPage_WelcomeMsg.getText();
    }

    get_Count_Of_Jobs_With_JobTitle(){
      var count=0;
      count=this.get_Count_of_elements_without_Empty_Data(this.Element_with_job_Description);
      return count;
    }

    get_Count_Of_Jobs_With_Pictures(){
      var count=0;
      count=this.get_Count_of_elements_with_srcAttribute_Value(this.Element_with_job_Pictures);
      return count;
    }

    get_Count_Of_Jobs_With_CompanyName(){
      var count=0;
      count=this.get_Count_of_elements_without_Empty_Data(this.Element_with_job_CompanyName);
      return count;
    }

    get_Count_Of_Jobs_With_Location(){
      var count=0;
      count=this.get_Count_of_elements_with_Country_Value(this.Element_with_job_Location);
      return count;
    }

    // ************ To get the count of elements whose getText() is not empty

    get_Count_of_elements_without_Empty_Data(webElement){
      var i=0;
      const links = webElement;
      console.log("*********** Start of text ************");
        links.forEach(function(element) {
          if (element.getText().length >0) {
            console.log("Element get Text is :::"+element.getText());
            i=i+1;
          }else{
            console.log("Element With Empty Text is :::"+element);
          }
      });
      console.log("*********** End of text ************");
      return i;
    }

    // *********** To get the count Images whose pictures are available and printing them

    get_Count_of_elements_with_srcAttribute_Value(webElement){
      var i=0;
      const links = webElement;
      console.log("*********** Start of text ************");
        links.forEach(function(element) {
          if (element.getAttribute('src').length >0) {
            console.log("Element get @src is :::"+element.getAttribute('src'));
            i=i+1;
          }else{
            console.log("Element With @src Text is :::"+element);
          }
      });
      console.log("*********** End of text ************");
      return i;
    }

     // ************ To get the count of countries after filtering city

    get_Count_of_elements_with_Country_Value(webElement){
      var i=0;
      const links = webElement;
      console.log("*********** Start of text ************");
        links.forEach(function(element) {
          console.log("Before Splitting with all Data :::"+element.getText());
          if (element.getText().split(',')[1].length >0) {
            console.log("Splitted/ Filtered text only for country :::"+element.getText().split(',')[1]);
            i=i+1;
          }else{
            console.log("Splitted text only for country :::"+element);
          }
      });
      console.log("*********** End of text ************");
      return i;
    }
}

export default new JobListPage()
