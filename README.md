# Website
![BCR2](https://github.com/PurdueChainReaction/Website/assets/136839609/d93af07e-174b-4ae8-968c-208b5a0bc476)
So you want to change my website

# How to get started
Firstly if you haven't already, make a github account. Then using the PurdueChainReaction login, add your github account to the repository. ![addingCollaborator](https://github.com/PurdueChainReaction/Website/assets/136839609/6f368dd6-3aed-4887-aaf3-ab34b57177c4) I would recommend you download [Git](https://git-scm.com/download/win) and [Visual Code Studio](https://code.visualstudio.com/download). Git will allow you to download, edit and reupload to this repository and visual code studio is a good place to edit the code.

## Setting up Visual Code
### Extensions
After Git and Visual Studio Code are downloaded, there are some extensions we need to get first so its easy to edit the website. To download extensions in Visual Studio Code, just click on the icon of 4 boxes on the left hand side. I recommend downloading the *GitHub Pull Requests and Issues* extension and the *Live Server* extension. The git extension makes pull requests(downloading the changed files) and push requests(uploading the files) easy to do. It also makes seeing what was changed between push requests.

![Extensions](https://github.com/PurdueChainReaction/Website/assets/58526449/a0b3dea8-c7a4-432c-aefa-b1c2ba980b2f)
| Live Server                                                                                                         | GitHub Pull Requests and Issues                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![Live Server](https://github.com/PurdueChainReaction/Website/assets/58526449/23a9af94-ae97-4385-957d-0be5c228b503) | ![GitHub Pull](https://github.com/PurdueChainReaction/Website/assets/58526449/92784067-0d58-4dc3-b2fc-d19a1ca30b4e) |

## Setting up Git
### Logging Into Git
To login to git through Visual Studio Code so you can update the repository, first you click on the person icon located on the left bar at the bottom. Next click on *Sign in with GitHub to use GitHub Pull Requests and Issues*. It will redirect you to the GitHub website, just login normally. Afterwards it will redirect you back to Visual Studio Code.

![Github Login](https://github.com/PurdueChainReaction/Website/assets/58526449/7128e6de-27ba-4740-aed3-351c9292418c)

### How to Pull Your Code For the First Time
To pull the code, you will be creating a folder using a git command that you can then access to change the code and then upload to the repository. 
To pull the code the first time, click on *Termainal* on the top bar, then *New Terminal*.

![Terminal](https://github.com/PurdueChainReaction/Website/assets/58526449/90cb3845-3748-439d-a4c0-3e240af9cd2d)

After you have open up the terminal, click on the dropdown arrow next to the plus, and then click on *Git Bash*.

![Initial Pull](https://github.com/PurdueChainReaction/Website/assets/58526449/7df30051-09e3-4efb-b167-84be926b8dfb)

In the terminal enter the command ```git pull https://github.com/PurdueChainReaction/Website```
This will create a folder on your computer where the repository will be stored. You can only pull the folder if and only if you are a collaborator.

After the intial pull, you can do pull commands if you have the folder open in explorer(This is explained in the next section). 
To do this, click on *Source Control*, which is the icon of 3 circles with lines attaching them on the left bar. After that to pull the repository and update your folder, click on the 3 dots in the source control section, then *pull*.

![Pull REquest](https://github.com/PurdueChainReaction/Website/assets/58526449/db74ac63-0a50-49a8-ada1-1225d5cd08e9)


### How to Open Code Folder in Visual Code
On the top bar select *File*, then *Open Folder*.

![Open Folder](https://github.com/PurdueChainReaction/Website/assets/58526449/a88a9a49-d57e-49aa-a4ab-3dd66f70c9bd)

### How to Push Your Code
To push after you have made changes, go back into source control and you should see a list of files you have edited, along with a button that says *Commit*. To update your files and push them into the repository, click on the plus next to *Changes*, it should say *Stage All Changes*.

![Stage Changes](https://github.com/PurdueChainReaction/Website/assets/58526449/ff31288c-d7fc-46a9-a71b-fcadc19b15c5)

After clicking the plus, it will move your file into a new section called *Staged Changes*. Once that has happend you ***MUST** put a message in the text box above or it will not push. Once you put a message in there, click on the drop down arrow and select *Commit & Push*.

![Commit & Push](https://github.com/PurdueChainReaction/Website/assets/58526449/a1b07394-c7b8-4042-9934-01263246b2ee)

If you get an error after pushing and it mentions you need to do a pull first, just go back and make a pull command and it should ask if you would like to *sync changes*. Accept that prompt. All that means is the version in the repository is different then the one you have and it will upload the tweaks you added and shouldn't affect the previous changes that were made in the last push. 
