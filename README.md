# Website
How to change the website:

# How to get started
Firstly if you haven't already, make a github account. Then using the *PurdueChainReaction* login, add your github account to the repository. ![addingCollaborator](https://github.com/PurdueChainReaction/Website/assets/136839609/6f368dd6-3aed-4887-aaf3-ab34b57177c4) I would recommend you download [Git](https://git-scm.com/download/win) and [Visual Code Studio](https://code.visualstudio.com/download). Git will allow you to download, edit and reupload to this repository and visual code studio is a good place to edit the code.

## Setting up Visual Code
### Extensions
After Git and Visual Studio Code are downloaded, there are some extensions we need to get first so its easy to edit the website. To download extensions in Visual Studio Code, just click on the icon of 4 boxes on the left hand side. I recommend downloading the *GitHub Pull Requests and Issues* extension. The git extension makes pull requests(downloading the changed files) and push requests(uploading the files) easy to do. It also makes seeing what was changed between push requests.

![Extensions](https://github.com/PurdueChainReaction/Website/assets/58526449/a0b3dea8-c7a4-432c-aefa-b1c2ba980b2f)
| GitHub Pull Requests and Issues                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
|![GitHub Pull](https://github.com/PurdueChainReaction/Website/assets/58526449/92784067-0d58-4dc3-b2fc-d19a1ca30b4e) |

## Setting up Git
### Logging Into Git
To login to git through Visual Studio Code so you can update the repository, first you click on the person icon located on the left bar at the bottom. Next click on *Sign in with GitHub to use GitHub Pull Requests and Issues*. It will redirect you to the GitHub website, just login normally. Afterwards it will redirect you back to Visual Studio Code.

![Github Login](https://github.com/PurdueChainReaction/Website/assets/58526449/7128e6de-27ba-4740-aed3-351c9292418c)

### How to Pull Your Code For the First Time
To pull the code, you will be creating a folder that you can then access to change the code and then upload to the repository. 

First, scroll up to the top of this repository, and click the bright green "<> Code" button.    Then, copy the link under the "Clone" text with https selected. 
Next, open VSCode and click on the source control tab on the left. Then click "Clone Repository". The search bar will open at the top, where you paste the link you copied from earlier. 
Choose a directory to save the repository in. Wait for this to finish, then it will prompt you to open the repository. Click "Open".

<img width="758" alt="clone_repo" src="https://github.com/user-attachments/assets/2ecb5b01-488d-4610-a487-66c1f19c3080">

<img width="785" alt="clone_repo2" src="https://github.com/user-attachments/assets/72a07081-cef8-4406-b380-f9ec2b38c0d9">

### How to Push Your Code
To push after you have made changes, go back into source control and you should see a list of files you have edited, along with a button that says *Commit*. To update your files and push them into the repository, click on the plus next to *Changes*, it should say *Stage All Changes*.

![Stage Changes](https://github.com/PurdueChainReaction/Website/assets/58526449/ff31288c-d7fc-46a9-a71b-fcadc19b15c5)

After clicking the plus, it will move your file into a new section called *Staged Changes*. Once that has happend you **MUST** put a message in the text box above or it will not push. Once you put a message in there, click on the drop down arrow and select *Commit & Push*.

![Commit & Push](https://github.com/PurdueChainReaction/Website/assets/58526449/a1b07394-c7b8-4042-9934-01263246b2ee)

If you get an error after pushing and it mentions you need to do a pull first, just go back and make a pull command and it should ask if you would like to *sync changes*. Accept that prompt. All that means is the version in the repository is different then the one you have and it will upload the tweaks you added and shouldn't affect the previous changes that were made in the last push. 

# Installing node
  To run the website, you first need to install node. Install it from here: https://nodejs.org/en. Then, make sure that you add the directory where you installed it to your PATH variable. You can do this by searching "environment variables" in the start menu, clicking on the option that says "Edit the System Environment Variables", then in the window that pops up, click on the box near the bottom that says "environment variables". In the new window, find where it says "Path" in System Variables and click edit with it selected. Then, click "new" and enter the directory where you installed node. You can click ok on all windows now, and npm should work in your VSCode repository. 

<img width="759" alt="PATH" src="https://github.com/user-attachments/assets/4d61d1c8-94e8-407a-affa-e3ba06ee4117">

  
  If it doesn't work, do the following:
  open an administrator terminal by right clicking powershell and selecting "open as administrator". Then, run this command: "Set-ExecutionPolicy RemoteSigned" and then run this: "npm install -g npm". Restart VSCode and try again.
  
  
# Running the website (With React and npm)
Running the website locally is easy with npm!
No extension is needed, just open the terminal at the bottom of the screen and type "npm install" to install the dependencies. This is basically all of the code that the app uses from other places, and it will only have to be done the first time you clone this repository. Wait for this to finish, then enter the command "npm start", and your browser will open with a development server that will automatically update with any changes as you save them.

<img width="748" alt="npm" src="https://github.com/user-attachments/assets/0e61537e-5c4e-40e8-bc41-3bd13e132dbc">


# Editing the website
[W3Schools HTML](https://www.w3schools.com/html/default.asp) and [W3Schools CSS](https://www.w3schools.com/css/default.asp) will be your best friend to learn more about the code of the website that is not explained here in this readme. This website is now using react and npm, which is the framework and the package manager, respectively. If you aren't sure how to do something, try looking up "react \[the thing\]" or "npm \[the thing\]", or use chatGPT. 

As you go through the website you will notice a lot of text surrounded by a ```{/*``` and ```*/}``` or //. These create a comment block. A comment block is something that will not be put in the website but can be read in the code.
There are multiple places in the code where you can remove said lines to allow for certain boxes to be put on the webiste like the announcement box.
The code should have comments for what most blocks of code do. Please add comments if you add to the website code so that future webmasters can understand what is happening. No one wants to do it but we should. 

A basic rundown of how html (and JSX for react) works:
- Blocks of code will start with a ```<###>``` and end with ```</###>```. Everything within that block will get affected by what is written in them. the ### will be one word.
- ```<a href="link">###</a>``` This is how you add a link, it will appear inline in the website. Just replace *link* with your link and ### with the words that will display.
- One thing you will see a lot is ```class="###"```, this links the block with code in the *stylesheet.css* page.
- If you make a block in the website that will look different but you aren't going to use that style more than once, add ```style="###"``` in the same area you see ```class="###"```. This will add a custom style to just that block of code.
- Any time you see ```id="***"``` it is a tag that can be navigated to in the navbar. You can link to it using ```href="#***"```. The *#* is the prefix to the word *id* is equal to.
- When linking to pages on the website just put ```href="page"``` **DO NOT PUT** ```href="page.html"``` the *.html* is not required for the website and looks better if it is not part of it.
- To learn more about how html works, go to [W3Schools HTML](https://www.w3schools.com/html/default.asp)

A basic rundown of how css works:
- Blocks of code will start with ```.### {``` and end with ```}```. Within the brackets, each line ends with a ```;```.
- Each line in the brackets is something that will change the asthetic of the final product.
- To learn more about what each line does, go to [W3Schools CSS](https://www.w3schools.com/css/default.asp)

Format the code automatically in VSCode by pressing [ALT]+[SHIFT]+[F] together. (Please do this O_O)

## Replacing Images
To replace an image name it **Exactly** like the one you are trying to replace file type and name, then upload it to the folder it was originally in. Member images are named from title then 1-whatever. If more team members need to be added, just copy and paste the block of code and incrememnt the number by 1 so it will be easy to replace later.

## Updating team members
The website reads the member data from a CSV file called "members.csv". This file is meant to come from downloading google form responses, but it will need some editing. 
To update the members, do the following:
1. Edit the members.csv file to include the new data and make sure you have the same format as the sample.
2. Upload each member's picture to the website under the memberImages folder, using the same name as the picture value from the csv file.
3. To have the leadership's images appear on the home page under "Meet the team", make sure that the top 5 rows of the csv file are in the following order:
  - President
  - Captain
  - Treasurer
  - Vice President
  - First Mate 

# Uploading the Code to the Website
The website will now automatically update when new code is pushed through github, so when you go to the source control tab and push your changes to the remote repository you are already done!
If you want to see the website's status and bandwidth usage (we get 100 GB a month for free), you can go to netlify. Go here and sign in with the BRGT github account: [Site Overview](https://app.netlify.com/sites/brgt-website/overview)
