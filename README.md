# Adopt My Cats

## Syopsis:
The Adopt My Cats project is an individual project working primarily with jQuery but incorporating previously learned tools to get remote data, write it to the DOM, and remove data based on a specified criteria.

## What to expect:
Enter a number of cats in an input field click submit or press enter and return the number of cats, their pictures and information. The original input field and submit button are removed and replaced with a button to remove cats with less than 10 toes.

![DEMO](https://github.com/hagansmith/Adopt-My-Cats/blob/master/AdoptCats.gif)

### Instructions
I'm the owner of a cat adoption website. I need a website that allows me to load in the number of cats I currently have available, display them on my screen, then be able to filter them based on whether or not they are considered disabled (have 10 toes or less).

1. On page load, I should see an input box and a button.
    - The input box should prompt me to enter the number of cats I currently have on my site.
    - I should be able to either click the enter key in the input field or the button on the page to submit my number of cats I have.
2. I should be able to make a call to: `https://random-dogs-api.herokuapp.com/cats/NUMBEROFCATZZZZZ` (obviously replacing NUMBEROFCATZZZZZ with the actual number I entered in step 1).
3. Once all the cats come back:
   - They should be displayed on my page in card-like style (use Bootstrap columns to aid in this).
   - Your card should be a `div`, it should have a nested `div` to display the cat image, it should have another nested `div` to contain all the descriptive elements (each in their own `p` tag).
        ```
        <div class="cat-card">
          <div class="image-container">
            <img src="IMAGELINK">
          </div>
          <div class="description-container">
            <h3> CAT NAME </h3>
            <p> Color: COLORRRR </p>
            <p> Skills: SKILLLLLZ </p>
            <p class="disabled-cat"> Toes: TOESSSS </p>
          </div>
        </div>
       ```
    - If the cat has 10 toes or less, their `p` tag that contains their number of toes should have a class of `disabled-kitty`.
    - The input and button originally shown on the page should be hidden.
    - A new button should now appear at the top of the page: 'Get Rid Of The Disabled Ones'
4. Once I click on the 'Get Rid Of The Disabled Ones' button, any card on my page that has a `p` tag with the class `disabled-kitty` should be hidden.


### Tools Used:
- Browserify
- Grunt
- jQuery (DOM methods, AJAX)
- Linting
- Bootstrap

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/Adopt-My-Cats.git
cd Adopt-My-Cats
npm install http-server -g
hs -c-1
cd Ad/lib
npm install
```
Navigate to: http://localhost:8080
