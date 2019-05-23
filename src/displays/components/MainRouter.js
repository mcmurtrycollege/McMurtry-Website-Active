import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Intro from './spashpage/intropage';
import About from './navbar headers/about/about/about';
import FinancialInclusivity from './navbar headers/about/financial_inclusivity/financial_Inclusivity';
import Events from './navbar headers/events/events/events';
import ArtEvents from './navbar headers/events/artevents/artevents';
import McTeam from './navbar headers/residential leadership/mcteam/mcteam';
import McMinistry from './navbar headers/residential leadership/mcministry/mcministry';
import Court from './navbar headers/residential leadership/court/court';
import Committees from './navbar headers/residential leadership/committees/committees';
import Associates from './navbar headers/residential leadership/associates/associates';
import DivisionalAdvisors from './navbar headers/academics/divisionaladvisors/divisionaladvisors';
import PAAs from './navbar headers/academics/paas/paas';
import AcademicFellows from './navbar headers/academics/fellows/fellows';
import ResidentHealthAdvisors from './navbar headers/wellbeing/resident_health_advisors';
import StriveLiaisons from './navbar headers/wellbeing/strive_liaisons';
import RoomReservations from './navbar headers/resources/roomreservations/roomreservations';
import Documents from './navbar headers/resources/documents/documents';
import ExpenseForms from './navbar headers/resources/expenseforms/expenseforms';
import McmResources from './navbar headers/resources/mcmurtryresources/mcmresources';
import WorkOrder from './navbar headers/resources/workorder/workorder';
import InitiativeRequest from './navbar headers/resources/initiativerequest/initiativerequest';
import EquipmentRequest from './navbar headers/resources/equipmentrequest/equipmentrequest';
import Mis from './navbar headers/resources/mis/mis';
import Contact from './navbar headers/contact/contact';

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/about" component={About} />
              <Route exact path="/financialinclusivity" component={FinancialInclusivity} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/artevents" component={ArtEvents} />
              <Route exact path="/mcteam" component={McTeam} />
              <Route exact path="/mcministry" component={McMinistry} />
              <Route exact path="/court" component={Court} />
              <Route exact path="/committees" component={Committees} />
              <Route exact path="/associates" component={Associates} />
              <Route exact path="/divisionaladvisors" component={DivisionalAdvisors} />
              <Route exact path="/peeracademicadvisors" component={PAAs} />
              <Route exact path="/academicfellows" component={AcademicFellows} />
              <Route exact path='/RHAs' component={ResidentHealthAdvisors} />
              <Route exact path="/striveliaisons" component={StriveLiaisons} />
              <Route exact path="/roomreservations" component={RoomReservations} />
              <Route exact path="/documents" component={Documents} />
              <Route exact path="/expenseforms" component={ExpenseForms} />
              <Route exact path="/mcmresources" component={McmResources} />
              <Route exact path="/workorder" component={WorkOrder} />
              <Route exact path="/initiativerequest" component={InitiativeRequest} />
              <Route exact path="/equipment" component={EquipmentRequest} />
              <Route exact path="/mis" component={Mis} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default MainRouter;