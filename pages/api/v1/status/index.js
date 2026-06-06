function status(request, response) {
    response.status(200).json(
        {
             status: '200',
             message: "são média"
        }
    );
}

export default status;