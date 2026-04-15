import Types "../types/properties";
import PropertiesLib "../lib/properties";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (leads : List.List<Types.Lead>) {

  public query func getFeaturedProperties() : async [Types.Property] {
    PropertiesLib.sampleProperties
  };

  public query func getTestimonials() : async [Types.Testimonial] {
    PropertiesLib.sampleTestimonials
  };

  public query func searchProperties(location : Text, maxPrice : Nat, propertyType : Text) : async [Types.Property] {
    PropertiesLib.search(PropertiesLib.sampleProperties, location, maxPrice, propertyType)
  };

  public func submitLead(name : Text, email : Text, phone : Text, message : Text, propertyInterest : Text) : async Bool {
    let lead : Types.Lead = {
      id = leads.size();
      name;
      email;
      phone;
      message;
      propertyInterest;
      submittedAt = Time.now();
    };
    leads.add(lead);
    true
  };

};
