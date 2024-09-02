import React from 'react';
import "./App.css";

function News(){
    return(
        <div class="container">
        <div class="row news-box">
            <div class="latest-news col-2">
                <h5><b>LATEST NEWS</b></h5>
                <div class="news">
                    <h6>HTCITY</h6>
                    <p>Want to try authentic Turkish food? Chefs from Istanbul curate a special menu at a food festival in Mumbai</p>
                </div>
                <div class="news">
                    <h6>WORLD NEWS</h6>
                    <p>Indian suspect in Nijjar killing allegedly assaulted in detention</p>
                </div>
                <div class="news">
                    <h6>CRICKET</h6>
                    <p>Rishabh Pant's red-ball comeback to Ishan Kishan's second chance: What to expect from the stars at Duleep Trophy</p>
                </div>
                <div class="news">
                    <h6>BUSINESS</h6>
                    <p>Bajaj Housing Finance targets ₹56-59,000 crore IPO valuation, issue size may get trimmed, may launch September: Report</p>
                </div>
            </div>



            <div class="col-7 top-news">
                
                <h5><b>TOP NEWS</b></h5>
                <div class="top-head">
                    <h4><a href="">Assembly Election Date Announcement LIVE: ECI to announce polls schedule</a></h4>
                    <img src="https://images.hindustantimes.com/img/2024/08/16/550x309/Chief-Election-Commissioner-Rajiv-Kumar-with-Elect_1716218585362_1723792546355.jpg"></img>
                </div>
                <div class="top">
                    <h4><a href="">Kolkata rape-murder: BJP workers-police clash; 19 arrested for hospital attack</a></h4>
                    <img src="https://images.hindustantimes.com/img/2024/08/16/148x111/PTI08-16-2024-000119B-0_1723799278624_1723799294464.jpg"></img>
                </div>
                <div class="top">
                    <h4><a href="">70th National Film Awards live updates: Rishabh Shetty wins Best Actor</a></h4>
                    <img src="https://images.hindustantimes.com/img/2024/08/16/148x111/70th_National_Film_Awards__1723797276241_1723797276430.jpg"></img>
                </div>
            </div>



            <div class="premium-news col-3">
                <h5><b>PREMIUM</b></h5>
                <div class="news">
                There Are Rivers in the Sky: Read an exclusive excerpt from the new book by Elif Shafak
                <img src="https://images.hindustantimes.com/img/2024/08/16/257x145/-_1723792951777.jpg"></img>
                </div>
                <div class="news">
                    <div class="row">
                        <div class="col-7">
                        Now streaming: A Wknd interview with Turkish-British author Elif Shafak
                        </div>
                        <div class="col-5">
                            <img src="https://images.hindustantimes.com/img/2024/08/16/148x111/-Ferhat-Elik-_1723792831893_1723793063455.jpg"></img>
                        </div>
                    </div>
                </div>
                <div class="news">
                    <div class="row">
                        <div class="col-7">
                        From oasis to forsaken: Where did Delhi’s water bodies go?
                        </div>
                        <div class="col-5">
                            <img src="https://images.hindustantimes.com/img/2024/08/15/148x111/Delhi_wetland_1647816129941_1723731807694.PNG"></img>
                        </div>
                    </div>
                </div>
                <div class="news">
                <div class="row">
                        <div class="col-7">
                        Terms of Trade | The indignity of pursuing self-interest
                        </div>
                        <div class="col-5">
                            <img src="https://images.hindustantimes.com/img/2024/08/15/148x111/INDIA-CRIME-DOCTORS-STRIKE-9_1723727098759_1723727321134.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default News;