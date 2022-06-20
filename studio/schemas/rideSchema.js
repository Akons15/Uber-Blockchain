export const rideSchema = {
    name: 'rides',
    type: 'document',
    title: 'Rides',
    fields: [
        {
            name: 'orderById',
            type: 'number',
            title: 'Order By Id',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'priceMultiplier',
            type: 'number',
            title: 'Price Multiplier',
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
        }
    ]
}