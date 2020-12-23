import React, {Component} from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
               <div class="header" style={{padding: "60px",fontFamily:'Serif',textAlign: "center",background: '#1d1727',color: 'white',fontSize: '30px'}}>
Login to PriviLedger Partner Portal
</div>
      <div class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6  border-blue-400 border-2"  action="#" method="POST">
          <input type="hidden" name="remember" value="true"/>
          <div class="rounded-md shadow-sm -space-y-px" style={{marginTop:'0px'}}>
            <div>
              <label for="username" class="sr-only">Email address</label>
              <input id="username" name="username" type="username" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border mb-2 font-medium border-gray-300 placeholder-blue-800 italic text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="username*"/>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border font-medium border-gray-300 placeholder-blue-800 italic text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="password*"/>
            </div>
          </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-small rounded-3xl text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{background:'#040d70'}}>
              LOG IN
            </button>
          </div>
          <div class="flex items-center justify-between space-y-0">
            <div class="flex items-center">
            </div>
            <div class="text-sm ">
              <a href="#" class="font-medium text-blue-800 italic hover:text-indigo-500">
                Forgot Password
              </a>
            </div>
          </div>
    
     
        </form>
        <div class="mt-6">
      <div class="relative mb-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm mb-7">
          <span class="px-2 text-gray-600 font-medium italic" style={{background:'#f9fafb'}}>Don't have a partner account?</span>
        </div>
      </div>

      <div>
            <button type="submit" class="group relative w-full text-gray-600 font-medium flex justify-center py-2 px-4 border border-transparent text-sm font-small rounded-3xl text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{background:'#eeecf2'}}>
              JOIN OUR PARTNER PROGRAM
            </button>
          </div>
    </div>
      </div>
      
    </div>
    </div>
    );
  }
}
export default App;
