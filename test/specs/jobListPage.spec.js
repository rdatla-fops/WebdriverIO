
import jobList from '../pageobjects/jobList.page';
var expect = require('chai').expect;

describe('When: user opens JobList page e.g:http://localhost:3333 in browser', function() {
  it('THEN: JobList page should open with Welcome Message', function () {
    // navigating to login page for example here : localhost:3333
    jobList.open_JobListPage();     
    jobList.waitFor_Header_logo_ToLoad();
    // **********  BDD style assertions   *****************
    expect(jobList.get_Welcome_Msg_text()).to.be.equal('Welcome To Job Fabrik');
    jobList.get_Welcome_Msg_text().should.be.a('string');

  });
});

describe('WHEN: User Opens JobList Page and observed no of jobs available', function() {
  it('THEN: User should be able to View 5 Jobs with -> Picture, Company Name, Location Details', function () {
    jobList.open_JobListPage();
    jobList.waitFor_Header_logo_ToLoad();
  // ************ BDD Style assertions **************
    expect(jobList.get_Count_Of_Jobs_With_JobTitle()).to.be.equal(5);
    jobList.get_Count_Of_Jobs_With_JobTitle().should.be.a('number');

    expect(jobList.get_Count_Of_Jobs_With_Pictures()).to.be.equal(5);
    jobList.get_Count_Of_Jobs_With_Pictures().should.be.a('number');

    expect(jobList.get_Count_Of_Jobs_With_CompanyName()).to.be.equal(5);
    jobList.get_Count_Of_Jobs_With_CompanyName().should.be.a('number');

    expect(jobList.get_Count_Of_Jobs_With_Location()).to.be.equal(5);
    jobList.get_Count_Of_Jobs_With_Location().should.be.a('number');

  });
});