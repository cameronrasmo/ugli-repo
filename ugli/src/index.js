import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {DCProvider, DCConsumer} from './DirectoryContext.js';

ReactDOM.render(<DCProvider>
                    <DCConsumer>
                        {directory => {
                            return(
                                <App addMethod={directory.add}/>
                            )
                        }}
                    </DCConsumer>
                </DCProvider>, document.getElementById('root'));