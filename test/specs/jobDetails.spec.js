
import jobList from '../pageobjects/jobList.page';
import JobDetails from '../pageobjects/JobDetails.page';
var expect = require('chai').expect;


describe('WHEN : A user clicked on any available Job in JobList Page', function() {
  it('THEN: JobDetails page should load with Company Details,Job Brief,Responsibilities,Requirements and Apply Button', function () {
    
    jobList.open_JobListPage();     
    jobList.waitFor_Header_logo_ToLoad();
    jobList.click_on_a_Available_Job();

    // *************** BDD Style assertions ****************
    expect(JobDetails.get_CompanyDetails_text()).to.be.equal('Company details');
    expect(JobDetails.get_CompanyDetails_text()).to.be.a('string');

    expect(JobDetails.get_JobBrief_text()).to.be.equal('Job brief');
    expect(JobDetails.get_JobBrief_text()).to.be.a('string');

    expect(JobDetails.get_Responsibilities_text()).to.be.equal('Responsibilities');
    expect(JobDetails.get_Responsibilities_text()).to.be.a('string');

    expect(JobDetails.get_Requirements_text()).to.be.equal('Requirements');
    expect(JobDetails.get_Requirements_text()).to.be.a('string');

    expect(JobDetails.get_ApplyButton_text()).to.be.equal('APPLY');
    expect(JobDetails.get_ApplyButton_text()).to.be.a('string');
  });
});

describe('WHEN : User clicked on Back Button in JobDetails Page', function() {
    it('THEN : User should be navigated back to JobList Page', function () {

        JobDetails.click_Back_Button();
        jobList.waitFor_Header_logo_ToLoad();

        jobList.get_Welcome_Msg_text().should.equal('Welcome To Job Fabrik');
        expect(jobList.get_Welcome_Msg_text()).to.be.a('string');
    });
  });