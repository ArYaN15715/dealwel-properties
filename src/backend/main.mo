import Types "types/properties";
import PropertiesApi "mixins/properties-api";
import List "mo:core/List";

actor {
  let leads = List.empty<Types.Lead>();

  include PropertiesApi(leads);
};
