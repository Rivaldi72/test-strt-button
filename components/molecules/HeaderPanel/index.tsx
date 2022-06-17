import React from 'react'

export default function HeaderPanel() {
    return (
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
    )
}
