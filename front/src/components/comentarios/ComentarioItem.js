import React from 'react';

const ComentarioItem = (props) => {
    const { date, title, comment, review } = props;

    const reviewDate = new Date(date);

    const formattedDate = reviewDate.toLocaleDateString();

    return (
        <div className="comentarios">
            <p className="date">{formattedDate}</p>
            <p className="review">{review} ⭐</p>
            <h1 className="title">{title}</h1>
            <div className="comment" dangerouslySetInnerHTML={{ __html: comment}} />
        </div>

    );
}

export default ComentarioItem;