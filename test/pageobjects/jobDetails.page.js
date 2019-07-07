import Page from './page'

class JobDetails extends Page {

    get CompanyDetails_Heading ()     { return $('(//span[text()="Apply"]//following::h2)[1]'); }
    get JobBrief_Heading ()           { return $('(//span[text()="Apply"]//following::h2)[2]'); }
    get Responsibilities_Heading ()   { return $('(//span[text()="Apply"]//following::h2)[3]'); }
    get Requirements_Heading ()       { return $('(//span[text()="Apply"]//following::h2)[4]'); }
    get Apply_Button ()               { return $('//span[text()="Apply"]'); }
    get Back_Button ()                { return $('//span[text()="Back"]'); }
  
    get_ApplyButton_text(){
      return this.Apply_Button.getText();
    }
   
    get_CompanyDetails_text(){
      return this.CompanyDetails_Heading.getText();
    }
    get_JobBrief_text(){
      return this.JobBrief_Heading.getText();
    }
    get_Responsibilities_text(){
      return this.Responsibilities_Heading.getText();
    }
    get_Requirements_text(){
      return this.Requirements_Heading.getText();
    }
    click_Back_Button(){
     this.Back_Button.click();
    }
    

    
}

export default new JobDetails()
