export default{
    Server: {
        proxy: {
            '/api' : 'http://localhost:5000', //Assuming Backend runs on port 5000
        }
    }
}