import React, { Component } from 'react'
import './reivew.css'

class Review extends Component {
    state = {
        reviews:[
         {
           id: 1,
           name: 'Bertie Yates',
           age: 29,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
         },
         {
           id: 2,
           name: 'Hester Hogan',
           age: 32,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
         },
         {
           id: 3,
           name: 'Larry Little',
           age: 36,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
         },
         {
           id: 4,
           name: 'Sean Walsh',
           age: 34,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
         },
         
       ]
       
      }
  render() {
    return (
        <div>{this.state.reviews.length} Birthdays Today
            {this.state.reviews.map(review => <div key={review.id}><img src={review.image} height="300" width={300} />
                <div className='flex'>
                <h2>{review.name}</h2>
                    <h6>{review.age} Years</h6>
                    </div>
            </div>)}
        
        </div>
    )
  }
}

export default Review