module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            saleDate: Date,
            items: Array,
            storeLocation: String,
            customer: Object,
            couponUsed: Boolean,
            purchaseMethod: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Collection = mongoose.model("sale", schema);  /* sale should be the same name of your database collection but just single not plural*/
    return Collection;
};
