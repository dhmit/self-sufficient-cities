export const chart_data = {
    life_expectancy: [{
        label: "Ward 7",
        data: [70.1, 74, 72.1, 74.7, 74.7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [81.2, 86.2, 87, 87.6, 87.6],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],

    air_quality: [{
        label: "Ward 7 (River Terrace)",
        data: [85, 91, 87, 87, 91, 92, 84, 77, 79, 85, 86, 77, 76],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3 (Takoma)",
        data: [91, 95, 96, 94, 94, 89, 85, 77, 80, 81, 80, 76, 75],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],

    obesity: [{
        label: "Ward 7",
        data: [27.7, 39.9, 39.9, 35.3, 39.2, 36.2, 35.3, 36.9],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [8.2, 11.7, 11.7, 7.5, 12, 11.8, 7, 25.3],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],

    heart_diseases: [{
        label: "Ward 7",
        data: [370.9, 338.5, 201.1, 264.7, 309.6, 307.2, 305.8],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [255.1, 251.4, 201.1, 206.5, 152.9, 129.4, 85.4],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],

    diabetes: [{
        label: "Ward 7",
        data: [64.9, 47.9, 63.4, 31.5, 43.6, 41.2, 34],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [17.6, 20.1, 10.1, 8.9, 7.8, 1.2, 0.0],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],
    lead_poisoning: [{
        label: "Ward 7",
        data: [3.5, 2.4, 2.7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [1.5, 2.2, 2.7],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],
    cancer: [{
        label: "Ward 7",
        data: [234.9, 296.7, 228.7, 233.2, 212.5, 223.4, 219.2],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [199.8, 191, 167.2, 179.9, 154.2, 138.2, 96.8],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],
    hiv: [{
        label: "Ward 7",
        data: [63.4, 37.1, 57.2, 45.8, 42.2, 30.9],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [2.5, 2.5, 3.8, 5.1, 0.0, 3.5],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }],
    mortality: [{
        label: "Ward 7",
        data: [1118.9, 1035.8, 1155.3, 1065.6, 1115.6, 1159.7, 1098.0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
    }, {
        label: "Ward 3",
        data: [734.0, 739.8, 658.4, 543.9, 572.5, 531.5, 534.0],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
    }]
};
export const labels = {
    life_expectancy: ["2000", "2009-2013", "2010-2014", "2011-2015", "2018"],
    air_quality: ["1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007",
        "2008", "2009", "2010"],
    obesity: ["1997-2001", "2007", "2009", "2010", "2011", "2012", "2013", "2015"],
    heart_diseases: ["2000", "2001", "2005", "2007", "2010", "2012", "2015"],
    diabetes: ["2000", "2001", "2005", "2007", "2010", "2012", "2015"],
    lead_poisoning: ["2008", "2009", "2010"],
    cancer: ["2000", "2001", "2005", "2007", "2010", "2012", "2015"],
    hiv: ["2000", "2001", "2005", "2007", "2010", "2012"],
    mortality: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"]
};
export const info = {
    life_expectancy: "The people of Deanwood were and still are already at a disadvantage just" +
        " at the moment they were born.In the presence of economic and social disparities that" +
        " have long been present in Ward 7 (Deanwood) since its founding as a result of racial " +
        "discrimination,it can be observed that such differences have led to their falling behind " +
        "in terms of life expectancy at birth when compared to their counterparts in Ward 3," +
        "which is majority White even though these places are in the same district. " +
        "Even at present,there still exists a large difference between the " +
        "life expectancy in Ward 3 and Ward 7 from its founding in the 19th century. " +
        "Such short life expectancies can be attributed problems such as " +
        "lack of healthcare access and biased policies that stagnated Deanwood’s prosperity.",
    air_quality: "In 1970, The US Environmental Protection Agency (EPA) established the National" +
        " Ambient Air Quality Standards (NAAQS) " +
        "to curb the concentrations of air pollutants in the environment. The District of" +
        " Columbia adapted these standards as required by the law " +
        "since they were aimed at protecting sensitive populations such as children and elders " +
        "who are more likely to face health threats due to poor air quality." +
        " There are six main classifications of air pollutants but, the chart will focus on" +
        " ozone only as the pollutant being analysed because in the end, " +
        "air pollution has general effects including aggravated heart diseases,aggravated asthma" +
        " and lung diseases and lastly inflammation of the respiratory tract. " +
        "Ozone can be defined as an odourless gas made up of three oxygen atoms that is created " +
        "as a result of a chain of chemical reactions involving sunlight, " +
        "volatile organic compounds,oxides of nitrogen and high temperature.Ozone pollution in " +
        "cities is a result of a reaction of pollutants" +
        " emitted from power plants, industrial boilers, refineries and chemical plants and the " +
        "stated favourable conditions. " +
        "High concentrations of ozone in the air may lead to health problems such as increased " +
        "frequency of asthma attacks, lungs more susceptible to infection, pre-eclampsia and " +
        "pre-term birth. Between 1998 and 2007, the trend in ozone concentration in Deanwood had " +
        "been decreasing and the levels of ozone had been lower in comparison to ward 3 " +
        "(a sign of more or advanced human activities in Ward 3 compared to Ward 7)." +
        " Furthermore, from the beginning of 2004 to 2007, Deanwood had achieved ozone " +
        "levels lower than the set standard in 1998 (0.085ppm)." +
        "However, when a new standard was adopted in 2008(0.075pm), Deanwood and its counterpart " +
        "were back to being above the standard level," +
        " a sign that indicates how people of Deanwood were susceptible to harmful effects of " +
        "ozone. This situation led to increased efforts to further reduce ozone concentration in" +
        " Deanwood, " +
        "and the District of Columbia as whole whereby, the efforts were successful in bringing " +
        "down the ozone levels to safe concentrations.\n",
    obesity: "In terms of leading healthy lifestyles, on average, the people of Deanwood have" +
        " not been practicing  lifestyles which include engaging in regular physical activity" +
        " and consumption of fruits and vegetables.This particular statement can be justified " +
        "when the trend of prevalence of obesity among adults is analyzed over the years. " +
        "Deanwood (Ward 7) has shown to have a higher percentage of prevalence of obesity among" +
        " adults when compare to Ward 3.Over the examined period, the percentage of prevalence" +
        " of obesity among adults has been at least twice that of Ward 3. " +
        "Such a trend conveys a message that residents in Deanwood are more likely to suffer" +
        " from diseases associated with obesity such as stroke, coronary heart diseases, " +
        "hypertension and diabetes.In the wake of inadequate healthcare services and economic " +
        "hardships in Deanwood, obesity further solidifies the " +
        "susceptibility of Deanwood residents to debilitating diseases in the present and in the " +
        "future because of lower immunities as in the case observed with the COVID-19 pandemic.\n",
    heart_diseases: "In the beginning of 2001, the number of people who passed away as a result" +
        " of succumbing to heart diseases was comparable between Deanwood (Ward 7) and Ward 3," +
        " but as time progressed, people who died from heart diseases in Ward 3 decreased " +
        "drastically while the number in Ward 7 the rate is almost the same so that the number in " +
        "2021, in ward 7 is almost  triple that in Ward 3.The main causes of heart diseases are" +
        " obesity, high cholesterol, hypertension and physical inactivity. In retrospect, all" +
        " these causes originate from obesity and lack of physical activity, " +
        "hence from the observed obesity trends, it would be expected that Deanwood would have a" +
        " larger percentage of deaths due to Heart diseases. In 2010, the District of Columbia" +
        " introduced the FEED Act which aimed at combating health disparities as a result of " +
        "racial differences. However, the act only benefited privileged communities while " +
        "disadvantaged communities like Ward 7 continued to perform poorly in alleviating causes " +
        "of heart diseases. Such an outcome is because of the presence of racial disparities " +
        "in other sectors too, such as education  and income  among residents play a role in " +
        "health.\n",
    diabetes: "In a similar trend, the number of fatalities caused by Diabetes is larger in" +
        " Deanwood (Ward 7) than Ward 3. This is not a surprising fact because all these trends " +
        "are interconnected to some degree as they may share the primary causes of such diseases." +
        " Diabetes like other diseases is mainly caused by low activity levels and also food" +
        " insecurity. Furthermore, diabetic patients need access to health care so as to monitor" +
        " and treat the disease. Such constant access to healthcare is not present in Ward 7 due " +
        "to lack of hospital, thus diabetic patients in " +
        "Deanwood are forced to travel to other wards for health services. In addition to" +
        " increased transport costs prescription drugs for diabetes already come at high price" +
        " and are still increasing. For instance, the price of Januvia rose from $263 in 2013 to" +
        " $300 in 2014. Furthermore,In 2016, there were only 6 pharmacies in Ward 7 and its " +
        "neighbouring ward 8?, while the number in Ward 3 was 21." +
        "The residents of Deanwood especially diabetic patients are faced with a lot of obstacles " +
        "in the course of getting treatment whereby the prevalence of such obstacles means more " +
        "people experience the more severe effects of Diabetes.\n ",
    lead_poisoning: " Lead poisoning occurs when lead builds up in the body over months or even" +
        " years.Children under the age of 6  are more vulnerable to lead poisoning because even in " +
        "very small concentrations  such as 5µg/dL,the effects that follow may be highly" +
        " adverse. Lead poisoning leads to the damage of the developing nervous system " +
        "among children further resulting in loss of IQ, impaired memory, behaviour and growth " +
        "among them.This poisoning may occur through inhaling air with lead particles or" +
        " ingesting lead particles directly like eating lead-based paint chips or indirectly " +
        "like ingesting water containing lead. Until recently, most of pipes in The District of " +
        "Columbia were made of lead. In the 1970s, lead-based paint for  houses and lead-based " +
        "gasoline for vehicles among other uses of lead were present before it was banned." +
        " Lead can still  be found inside and outside homes, thus there were no safe spaces for" +
        " children. Even when the discovery of harmful effects caused by lead poisoning during " +
        "the early 2000’s, efforts to eradicate the agents leading to poisoning such as laying " +
        "lead-free piping, favoured privileged communities like Ward 3 while leaving " +
        "disadvantaged communities to fight the problem alone.\n",
    cancer: "As one of the leading causes of death in the District of Columbia over several" +
        " years,deaths due to cancer continue to bring into light the differences that exist " +
        "between Ward 7 (Deanwood) and Ward 3.The larger number of deaths in Ward 7 is due to " +
        "poor air quality, lack of access to adequate healthcare, obesity and poor eating habits " +
        "which may be due to lower education attainment among Deanwood residents when compared to " +
        "Ward 3.\n",
    hiv: "HIV (Human Immunodeficiency Virus)  causes AIDS which stands for " +
        "Acquired Immunodeficiency Syndrome),weakening of the body’s immunity " +
        "to fight off infections.In 2000, the number of deaths due to HIV/AIDS in Ward 7" +
        " (Deanwood) was almost thirty times the number in Ward 3. As time progressed, the" +
        " comparison factor was reduced to ten in 2010. Even though the comparison factor was " +
        "reduced by ⅔,there still exists a large gap in deaths due to HIV/AIDS " +
        "in Ward 7 and Ward 3 because of reasons such ignorance on safe practises, low education " +
        "attainment levels,access to healthcare in the case of perinatal transmission " +
        "and lack of access to antiretroviral drugs in case of relieving effects of" +
        " HIV/AIDS.Furthermore, the greater the number of people who are HIV positive, " +
        "then the greater number of people with weakened immune systems so, in addition to " +
        "already poor lifestyles, residents of Deanwood were more susceptible to contracting " +
        "different diseases and suffer from the more fatal effects of these diseases.",
    mortality: "As anticipated, the total number of deaths in Deanwood (Ward 7) are greater" +
        " than that in Ward 3 even though these wards have almost the same population size. " +
        "All previous trends showed how Deanwood suffered more than its counterpart because of " +
        "underlying racial disparities even though some efforts were introduced" +
        " to eliminate such disparities.However, such trends convey a message that efforts " +
        "that are created to alleviate conditions in disadvantaged communities should be tailored" +
        " towards the needs of that community instead of of general programs" +
        " for the whole district which lead to the completely opposite effect than intended."

};
