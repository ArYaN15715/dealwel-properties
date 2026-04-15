module {
  public type Property = {
    id : Nat;
    title : Text;
    price : Nat;
    location : Text;
    propertyType : Text;
    bedrooms : Nat;
    bathrooms : Nat;
    area : Nat;
    imageUrl : Text;
    badge : ?Text;
    description : Text;
  };

  public type Testimonial = {
    id : Nat;
    name : Text;
    role : Text;
    quote : Text;
    avatarUrl : Text;
  };

  public type Lead = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    propertyInterest : Text;
    submittedAt : Int;
  };
};
