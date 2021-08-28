let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan)
{
    console.log('Only offer vegan dishes')
}

else if (isGuestOneVegan || isGuestTwoVegan)
{
    console.log('Make sure to offer some vegan options')

}
else {
    console.log('Offer anything on the menu')
}