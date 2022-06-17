import React from 'react'

export default function CardView() {
    return (
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
                            <button type="button" className='btn btnConnectWallet btn-block w-100'>Connect Your Wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
