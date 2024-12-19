# LeetMetric

LeetMetric is a web application that provides detailed statistics about a user's performance on LeetCode. This tool fetches data from the LeetCode Stats API and displays it in an organized and user-friendly interface.  

## Features  
- Fetches and displays data for any LeetCode username.  
- Shows:  
  - Total number of questions solved.  
  - Breakdown of questions solved by difficulty (Easy, Medium, Hard).  
  - Acceptance rate.  
  - Global ranking on LeetCode.  
- Simple and interactive UI to visualize progress.  

## API Used  
This project uses the [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/) to fetch user data.  
Example API endpoint:  

https://leetcode-stats-api.herokuapp.com/${username}

Replace `${username}` with the actual LeetCode username to retrieve the statistics for a specific user.  

## How It Works  
1. The user provides their LeetCode username.  
2. The application makes an API call to fetch the user's data.  
3. The statistics are processed and displayed on the webpage.  

## Usage  
1. Clone the repository:  
   ```bash
   git clone <repository-url>
2. Open the project folder and set up any required dependencies.
3. Launch the application in your browser.
   
Technologies Used

  Frontend: HTML, CSS, JavaScript.
  API Integration: Fetch API to communicate with the LeetCode Stats API.
