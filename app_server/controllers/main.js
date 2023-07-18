/* GET rooms view */
const index = (req, res) => {
    console.log('This is the main controller');
    res.render('index', { title: 'Travlr Getaways' });
   };
   module.exports = {
    index
   };