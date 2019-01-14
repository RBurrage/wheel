/*---------------------------------------------- Reliance 2019 Wheel -------------------------------------*/

let core = document.querySelector('.core_background');
let secondGroups = document.querySelectorAll('.sols-and-mods');
let productInfo = document.getElementById('product-info');
let relianceIntro = '<h2>ETQ Reliance 2019</h2><em><h4>ETQ Platform and Solution Sets<br>Best-in-Class Processes and Workflows</h4><hr class="intro-divider"></em>';
let etqRelianceDescription = `${relianceIntro}
<h3>Reliance Platform Core</h3>
<p>ETQ Reliance Platform provides customers with a suite of fundamental administration capabilities and a set of core business processes to help optimize the critical processes that drive excellence through quality.</p>
`
// Page loads with the ETQ Reliance description displayed
productInfo.innerHTML = etqRelianceDescription;

core.addEventListener('mouseover', () => {	
	productInfo.innerHTML = etqRelianceDescription
})

secondGroups.forEach(function (secondGroup) {
    let solution = secondGroup.childNodes[1];
    let module = secondGroup.childNodes[3];
	console.log(secondGroup);

    secondGroup.addEventListener('mouseover', () => {
        solution.classList.add('hovered_bg');
        module.classList.add('hovered_bg');

        switch (secondGroup) {
            case secondGroups[0]: {
				productInfo.innerHTML = `${relianceIntro}
							<h3>Health &amp; Safety</h3>
							<p>Move from a reactive problem-based approach and build a culture of workplace safety with a proactive, risk-based program that minimizes hazards in the workplace.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>Job Safety Analysis</li>
							<li>Industrial Hygiene</li>
							<li>Behavior Based Safety</li>
							<li>Accidents and Safety Reporting</li>
							<li>Safety Data Sheets</li>
							`
                break;
            }
            case secondGroups[1]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Quality by Design</h3>
							
							<p>Build a culture of quality, starting with step one of the product and service design process. Analyze product and process plans, establish metrics and benchmarks, and track the most critical quality processes across an organization.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>Advanced Quality Product Planning (APQP)</li>
							<li>Product Specification Management</li>
							<li>Failure Modes and Effects Analysis (FMEA)</li>
							<li>Hazard Analysis and Critical Control Points(HACCP)</li>
							<li>Assets, Calibration and Maintenance</li>
							`
                break;
            }
            case secondGroups[2]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Nonconformance Handling</h3>
							
							<p>Reduce customer complaints and foster continuous improvement by minimizing defects and boosting product quality. Mitigate the cost of poor quality, minimize customer complaints and build stronger brand reputation.                            </p>
							
							<p>Process Modules</p>
							<ul>
							<li>Inspection &amp; Testing</li>
							<li>Nonconformance Reporting</li>
							<li>Planned Deviations</li>
							<li>Customer Feedback</li>
							<li>Return Material Authorization</li>
							`
                break;
            }
            case secondGroups[4]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Complaints Management for Life Sciences</h3>
										
							<p>Turn regulatory and compliance requirements from an obligation into strategic advantage. Automate Complaints Handling and regulatory submission in compliance with 21 CFR Part 11 guidelines.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>21 CFR Part 11</li>
							<li>Complaint Handling</li>
							<li>eSubmission Gateway</li>
							`
                break;
            }
            case secondGroups[3]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Supply Chain Quality</h3>
							<p>Ensure finished product quality with automated control and visibility over all elements of your supply chain, from local manufacturers to global suppliers. Track suppliers and materials, build qualitative and quantitative supplier ratings, and trigger actions to improve supplier quality.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>Product Part Approval Process (PPAP)</li>
							<li>Receiving and Inspection</li>
							<li>Supplier Corrective Action (SCAR)</li>
							<li>Suppliers, Materials &amp; Chemicals </li>
							<li>Supplier Rating</li>
							`
                break;
            }
            case secondGroups[5]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Environmental Management</h3>
							<p>Make environmental management a strategic business priority. Identify environmental impact targets, log permit information, oversee waste water and emissions management and track sustainability initiatives.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>Aspects, Objects &amp; Targets</li>
							<li>Permit Control</li>
							<li>Chemical Inventory</li>
							<li>Waste Water Management</li>
							<li>Sustainability Reporting</li>
							<li>Emissions Management</li>
							`
                break;
            }
            case secondGroups[6]: {
                productInfo.innerHTML = `${relianceIntro}
							<h3>Enterprise Risk Management</h3>
							<p>Automate several key quality processes that allow companies to incorporate risk-based thinking into organizational planning and operational monitoring. Identify and assess risks companywide and leverage risk data to drive long-term mitigation and improvement.</p>
							
							<p>Process Modules</p>
							<ul>
							<li>Compliance Obligations</li>
							<li>Quality Records</li>
							<li>Meetings Management</li>
							<li>Monitoring &amp; Inspection</li>
							<li>Risk Surveys</li>
							<li>Emergency Preparedness</li>
							`
                break;
            }
        }
    })
    secondGroup.addEventListener('mouseout', () => {
        solution.classList.remove('hovered_bg');
        module.classList.remove('hovered_bg');
        productInfo.innerHTML =  etqRelianceDescription;
    })
})