import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LabTabs() {
    const [value, setValue] = React.useState('2');
    const [age, setAge] = React.useState('');

    const handleTab = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const handleSelect = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Box sx={{ width: '100%', typography: 'body1' }} className="mainContainer bottomShadow">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleTab}
                            aria-label="lab API tabs example"
                            variant='fullWidth'
                            indicatorColor="secondary"
                            textColor="inherit"
                        >
                            <Tab label="Public IDO" value="1" />
                            <Tab label="Private IDO" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Kosong
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="row">
                            <div className="col-2 borderRight">
                                <div className="row h-100">
                                    <div className="col-12 bottomEnd">
                                        <h5 className='primaryText mb-0'>4</h5>
                                        <p className='text-secondary mb-0' style={{ fontSize: '10px' }}>Total IDO Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 borderRight">
                                <div className="row h-100">
                                    <div className="col-12 bottomEnd">
                                        <h5 className='primaryText mb-0'>0</h5>
                                        <p className='text-secondary mb-0' style={{ fontSize: '10px' }}>Total Total Live</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row h-100">
                                    <div className="col-12 bottomEnd">
                                        <h5 className='primaryText mb-0'>4</h5>
                                        <p className='text-secondary mb-0' style={{ fontSize: '10px' }}>Total Upcoming IDO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row justify-content-end">
                                    <div className="col-6 text-end">
                                        <select className="sortSelect">
                                            <option value="1">Latest</option>
                                            <option value="2">Hardcap</option>
                                            <option value="3">Most Favorite</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box >
            <Box sx={{ width: '100%', typography: 'body1' }} className="mainContainer">
                <TabContext value={value}>
                    <TabPanel value="1">
                        Kosong
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="row">
                            <div className="col-3">
                                <div className="card cardCrypto">
                                    <img src="assets/image.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <div className="logoCrypto mx-auto mb-3">
                                            <img src="assets/logo.png" className="card-img-top" alt="..."></img>
                                            <img src="assets/ethereum-logo.png" className="ethereumLogo img-fluid"></img>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h5 className="cryptoTitle">Merchant Marvels <img src="assets/check.png" className="checkIcon"></img></h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href="#"><img src="assets/globe.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/twitter.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/facebook.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/telegram.png" className="socialIcon"></img></a>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-4">
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Sale Type:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>Private Sale</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Date:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>05:00:29</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Status:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}><img src="assets/circle-orange.png" className="circleOrange"></img>  Upcoming</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-12 p-0">
                                                <button type="button" className='btn btnConnectWallet btn-block'>Connect Your Wallet</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card cardCrypto">
                                    <img src="assets/image.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <div className="logoCrypto mx-auto mb-3">
                                            <img src="assets/logo.png" className="card-img-top" alt="..."></img>
                                            <img src="assets/ethereum-logo.png" className="ethereumLogo img-fluid"></img>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h5 className="cryptoTitle">Merchant Marvels <img src="assets/check.png" className="checkIcon"></img></h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href="#"><img src="assets/globe.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/twitter.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/facebook.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/telegram.png" className="socialIcon"></img></a>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-4">
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Sale Type:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>Private Sale</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Date:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>05:00:29</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Status:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}><img src="assets/circle-orange.png" className="circleOrange"></img>  Upcoming</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-12 p-0">
                                                <button type="button" className='btn btnConnectWallet btn-block'>Connect Your Wallet</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card cardCrypto">
                                    <img src="assets/image.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <div className="logoCrypto mx-auto mb-3">
                                            <img src="assets/logo.png" className="card-img-top" alt="..."></img>
                                            <img src="assets/ethereum-logo.png" className="ethereumLogo img-fluid"></img>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h5 className="cryptoTitle">Merchant Marvels <img src="assets/check.png" className="checkIcon"></img></h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href="#"><img src="assets/globe.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/twitter.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/facebook.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/telegram.png" className="socialIcon"></img></a>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-4">
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Sale Type:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>Private Sale</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Date:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>05:00:29</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Status:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}><img src="assets/circle-orange.png" className="circleOrange"></img>  Upcoming</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-12 p-0">
                                                <button type="button" className='btn btnConnectWallet btn-block'>Connect Your Wallet</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card cardCrypto">
                                    <img src="assets/image.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <div className="logoCrypto mx-auto mb-3">
                                            <img src="assets/logo.png" className="card-img-top" alt="..."></img>
                                            <img src="assets/ethereum-logo.png" className="ethereumLogo img-fluid"></img>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h5 className="cryptoTitle">Merchant Marvels <img src="assets/check.png" className="checkIcon"></img></h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <a href="#"><img src="assets/globe.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/twitter.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/facebook.png" className="socialIcon"></img></a>
                                                <a href="#"><img src="assets/telegram.png" className="socialIcon"></img></a>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-4">
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Sale Type:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>Private Sale</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Date:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}>05:00:29</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 px-3">
                                                <div className="row text-center titleBody">
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px" }}>Status:</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className='mb-0' style={{ fontSize: "6px", fontWeight: 'bold' }}><img src="assets/circle-orange.png" className="circleOrange"></img>  Upcoming</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-12 p-0">
                                                <button type="button" className='btn btnConnectWallet btn-block'>Connect Your Wallet</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}