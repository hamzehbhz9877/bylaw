import{c as e,a as u,d as r}from"./object.8e166b0a.js";const C={firstName:"",lastName:"",userName:"",email:"",password:"",rePassword:""},i=e({firstName:u().required("\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u06A9\u0648\u0686\u06A9 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim(),lastName:u().required("\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim(),userName:u().required("\u0644\u0637\u0641\u0627 \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim(),email:u().email("\u0641\u0631\u0645\u062A \u0627\u06CC\u0645\u06CC\u0644 \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0635\u062D\u06CC\u062D \u0646\u0645\u06CC\u0628\u0627\u0634\u062F").required("\u0644\u0637\u0641\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim(),password:u().required("\u0644\u0637\u0641\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim(),rePassword:u().oneOf([r("password"),null],"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627 \u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0631\u0627\u0628\u0631 \u0646\u06CC\u0633\u062A").required("\u0644\u0637\u0641\u0627 \u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F").trim()});export{C as i,i as v};
