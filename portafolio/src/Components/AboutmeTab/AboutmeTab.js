// This components is a child for component/view AboutMe 
import React from 'react';
import { Tabs, Tab } from 'react-mdl';
import { withRouter } from 'react-router';

// Simple header with scrollable tabs
class AboutmeTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    
        );
    }
}

export default withRouter(AboutmeTab);