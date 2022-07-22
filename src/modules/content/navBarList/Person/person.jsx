import React, {Component} from 'react';
import {Box, Tabs, Tab} from "@mui/material";
import SignUpForm from "../../../forms/signUpForm/signUpForm";

class TabPanel extends Component {
    constructor(props) {
        super(props);
          }
    render() {
        return this.props.index === this.props.value ? (

            <div>
                {
                    this.props.children
                }
            </div>
        ) : null;
    }
}


class Person extends Component {
    constructor() {
        super();
        this.state = {
            valueTab: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event, newValue)  {
        this.setState({valueTab: newValue});
    }
    render() {
        return (
            <div>
                <Box sx={{ width: '50%', margin:'auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs centered value={this.state.valueTab} onChange={this.handleChange} aria-label="basic tabs example">
                            <Tab label="Регистрация"/>
                            <Tab label="Вход"/>
                        </Tabs>
                    </Box>


               <TabPanel value={this.state.valueTab} index={0}>
                        Форма регистрации
                   <SignUpForm />
                    </TabPanel>
                    <TabPanel value={this.state.valueTab} index={1}>
                        ФормаВхода

                    </TabPanel>
                </Box>
            </div>
        );
    }
}

export default Person;
