import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const titles = [
  {
    id: "1",
    title: "Add New Employee",
    img: "https://pngimage.net/wp-content/uploads/2018/05/employee-images-png-5.png",
    route: "/employee",
  },
  {
    id: "2",
    title: "Add New Department",
    img: "https://www.kindpng.com/picc/m/195-1957031_icon-showing-organized-hierarchical-chart-department-icon-hd.png",
    route: "/department",
  },
  {
    id: "3",
    title: "Add New Grade",
    img: "https://cdn-payscale.com/content/how-it-works-market-worth-icon@2x.png",
    route: "/grade",
  },
  {
    id: "4",
    title: "Add New Grade Details",
    img: "https://cdn4.iconfinder.com/data/icons/business-and-finance-line-1/512/finance_business_investment_payment_report-512.png",
    route: "/gradeDetails",
  },
  {
    id: "5",
    title: "Prepare Monthly Salary",
    img: "https://cdn-payscale.com/content/how-it-works-negotiate-icon@2x.png",
    route: "/Salary",
  },
  {
    id: "6",
    title: "Grade Report",
    img: "https://cdn-payscale.com/content/how-it-works-job-details-icon@2x.png",
    route: "/gradeReport",
  },
];

function Home() {
  return (
    <div className="bg-gray-200 sm:p-5 grid grid-cols-1 gap-6 sm:gap-16 sm:grid-cols-2 lg:grid-cols-4  ">
      {titles.map((item) => (
        <Link key={item.id} to={item.route}>
          <Card key={item.id} title={item.title} img={item.img} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
