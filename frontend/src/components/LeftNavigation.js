import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function LeftNavigation() {

    useEffect(() => {
      window.feather.replace();// icons
    });
  
    return (
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Stocks
                    <ul class="nav flex-column">
                        <li class="nav-item">
                          <Link to="/stocks/rus" className="nav-link active">
                            <span data-feather="home"></span>
                            RUB
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/stocks/usd" className="nav-link active">
                            <span data-feather="home"></span>
                              USD
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/stocks/eur" className="nav-link active">
                            <span data-feather="home"></span>
                              EUR
                          </Link>
                        </li>
                    </ul>
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/bonds" className="nav-link active">
                    <span data-feather="shopping-cart"></span>
                    Bonds
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/etfs" className="nav-link active">
                    <span data-feather="shopping-cart"></span>
                    ETFs
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </nav>
  );
}

export default LeftNavigation;
