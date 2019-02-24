export interface Data {
    jobsfeed: DataObj[];
}

// Dataobject model
export interface DataObj {
    _id: string;
    title: string;
    applylink: string;
    jd: string;
    companyname: string;
    location: string;
    experience: string;
    salary: string;
    type: string;
    skills: string;
    startdate: string;
    enddate: string;
    created: string;
    source: string;
    timestamp: any;
    __v: number;
}
