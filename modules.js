var ui = {};

ui.navigation =` 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
          <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                    <li class="nav-item">
                         <a class="nav-link" aria-current="page" href="#createAccount" id="createAccount" onclick="loadCreateAccount()">Create Account</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="#" onclick="loadDeposit()" id="deposit">Deposit</a>
                    </li>          
                    <li class="nav-item">
                         <a class="nav-link" href="#" onclick="loadWithdraw()" id="withdraw">Withdraw</a>
                    </li>          
                    <li class="nav-item">
                         <a class="nav-link" href="#" onclick="loadBalance()" id="balance">Balance</a>
                    </li>          
                    <li class="nav-item">
                         <a class="nav-link" href="#" onclick="loadAllData()" id="alldata">AllData</a>
                    </li>
               </ul>
          </div>
          </div>
     </nav>
     `;

     var navigation = document.getElementById('navigation');
     navigation.innerHTML += ui.navigation;


ui.createAccount=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Create Account</div>
          <div class="card-body">
               Name<br>
               <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
               Email address<br>
               <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
               Password<br>
               <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
               <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
               <div id="createStatus"></div>
          </div>
     </div>
`;

ui.login=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Login</div>
          <div class="card-body">
               Email address<br>
               <input type="input" class="form-control" id="loginEmail" placeholder="Enter email"><br>
               Password<br>
               <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
               <button type="submit" id="submit" class="btn" onclick="login()">Login</button>
               <div id="loginStatus"></div>
          </div>
     </div>
`;

ui.deposit=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Deposit</div>
          <div class="card-body">
               Email address<br>
               <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"><br>
               Amount<br>
               <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount"><br>
               <button type="submit" id="submit" class="btn" onclick="deposit()">Deposit</button>
               <div id="depositStatus"></div>
          </div>
     </div>
`;

ui.withdraw=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Withdraw</div>
          <div class="card-body">
               Email address<br>
               <input type="input" class="form-control" id="withdrawEmail" placeholder="Enter email"><br>
               Amount<br>
               <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter amount"><br>
               <button type="submit" id="submit" class="btn" onclick="withdraw()">Withdraw</button>
               <div id="withdrawStatus"></div>
          </div>
     </div>
`;

ui.balance=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Balance</div>
          <div class="card-body">
               Email address<br>
               <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"><br>
               <button type="submit" id="submit" class="btn" onclick="balance()">Show Balance</button>
               <div id="loginStatus"></div>
          </div>
     </div>
`;

ui.default=`
     <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">BadBank Landing Module</div>
          <div class="card-body">
               <h5 class="card-title">Welcome to the bank</h5>
               <p class="card-text">
                    You can move around using the naviation bar.
               </p>
               
          </div>
     </div>
`;

ui.allData=`
     <h5>All Data in Store</h5>
     <button type="button" class="bnt btn-secondary" onclick="allData()">Show All Data</button>
     <div id="allDataStatus"></div>
`

var loadCreateAccount = function(){
     target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
     target.innerHTML = ui.login;
};

var loadDeposit = function(){
     target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
     target.innerHTML = ui.withdraw;
};

var loadBalance = function(){
     target.innerHTML = ui.balance;
};

var defaultModule = function(){
     target.innerHTML = ui.default;
};

var loadAllData = function(){
     target.innerHTML = ui.allData;
};

defaultModule();