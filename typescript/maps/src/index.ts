/// <reference types="@types/google.maps" />
import { Company } from "./company";
import { User } from "./user";
import { CustomMap } from "./customMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
