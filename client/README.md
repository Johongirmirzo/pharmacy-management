# Pharmacy Management App
Pharmacist is responsible for making orders for customers. And the pharmacist can track his sales, print and download each order invoice . He can also view tota sales for each day via the line chart where sale for each day is displayed.

https://user-images.githubusercontent.com/104018697/200477463-8a2ddba7-fb01-404c-8001-213efd1ee1f9.mp4

## Technologies used:
- React
- Redux-Toolkit
- Redux-Persist
- React-Redux
- Typescript
- Styled-Components

## Features:

### Login
1. Pharmacist submits his credentials
   1. If he's authenticated the server sends back token and authentication credentials
   2. Else authentication fails like if he enters non-existing email or wrong password then apropriate error message is displayed in the UI
   3. Or if the pharmacist makes more than 3 unsuccessfull login attempts, then he's disabled to login for until another 1 hour
   4. Else authentication successful then the pharmacist can access the app
   

### Dashboard
- In dashboard the pharmacist can view total sales that are displayed on the line chart.

### Invoice Search
1. The Pharmacist submits an invoice number
   1. If the invoice number is invalid, apropriate error message is displayed in the UI, indicating what went wrong
   2. Else the invoice number is valid, then order with that invoice number is displayed
   3. Found invoice can then be downloaded, or printed out

### Medicine Inventory
- The Pharmacist can view all the medicines that've been created so far, medicines are displayed 5 per page by default but admin can change it to display 10, 25, 50, 75 or 100 medicines per page. Admin can also move to different pages to view other medicines using pagination

### Medicine Search
1. The pharmacist submits a medicine name
   1. If it's invalid then error message is displayed in the UI
   2. Else it's valid then found medicine is displayed in the UI
   3. Then pharmacist can add amount of the found medicine to the cart
   4. Once he enters add to cart, he'll be redirect to the cart page where he sees all the medicines that's been added to the cart so far
   5. The pharmacist also sees empty form fields where he fill it with customer info like customer name, phone number and his payment type
   6. The pharmacist can also delete unwanted medicines from the cart
   7. Once the pharmacist fills the customer details and makes order he'll be redirect to invoice page
   
### Invoice
- Invoice page where the pharmacist's redirected as soon as he makes the order 
- And in that page the pharmacist sees all details for the new order like customer info and medicines
- The pharmacist can either print or download that invoice or do both

### Cart
- If the pharmacist has added medicines to the cart he sees them in here
- Else no medicines's been added to the cart message is displayed in the 


### Orders
- The pharmacist sees table of orders on each row containing customer name, mobile number, his payment type, and the order invoice number. orders are displayed 10 per page by default but admin can change it to display 10, 25, 50, 75 or 100 medicines per page. Admin can also move to different pages to view other medicines using pagination

### Sales Reports
1. The pharmacist submits 2 dates to view his sale reports between those 2 dates
    1. If data is invalid then erorr message is displayed in the UI
    2. Else if data is valid 
       1. Then all of the sales that's been made by him between those 2 dates are displayed
       2. Else informative message to indicate no sales's been mades between those 2 dates are displayed

### Change Profile
1. The pharmacist submits his profile data to edit
   1. If data is invliad then erorr message is displayed in the UI
   2. Else if data is valid then message to indicate his profile changed is displayed in the UI

### Change Password
1. The pharmacist submits his password data to edit
   1. If data is invliad then erorr message is displayed in the UI
   2. Else if data is valid then message to indicate his password changed is displayed in the UI
