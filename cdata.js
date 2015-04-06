var orgs = [
	{name: "CCC/CEMC", href: "http://www.cemc.uwaterloo.ca/"},
	{name: "ECOO", href: "http://ecoocs.org/"},
	{name: "UWaterloo ACM", href: "http://acm.student.cs.uwaterloo.ca/~acm00/"},
	{name: "USACO", href: "http://usaco.org"},
	{name: "Don Mills Online Judge", href: "http://www.dmoj.ca/"},
	{name: "HackerEarth", href: "http://www.hackerearth.com/"},
	{name: "Codeforces", href: "http://codeforces.com/"},
	{name: "Facebook Hacker Cup", href: "https://www.facebook.com/hackercup"},
	{name: "Google Codejam", href: "https://code.google.com/codejam"}];

var cdata = [
	{
		orgid: 6, date: "02/02/2015", name: "Codeforces Round 290 Div. 2",
		desc:
			"182nd in a field of 2855, solving 2 of 5 problems and attempting a 3rd. " +
			"Gained +3 ELO, ascending to the rank of Candidate Master in Division 1.",
		links: 
			[{desc: "Problems", href: "http://codeforces.com/contest/510"},
			{desc: "Standings", href: "http://codeforces.com/contest/510/standings"}]
	},
	{
		orgid: 5, date: "01/02/2015", name: "HackerEarth February Easy Challenge",
		desc:
			"Solved all five problems with half an hour to spare. Finished 11th (by time, among 32 other perfect scores) " +
			"in a field of 840 competitors.",
		links:
			[{desc: "Problems", href: "http://www.hackerearth.com/february-easy-challenge-2015/problems/"},
			{desc: "Standings", href: "http://www.hackerearth.com/february-easy-challenge-2015/hof/"}]
	},
	{
		orgid: 7, date: "c. 11/01/2015", name: "FBHC 2015 Qualification Round",
		desc: "Solved 2 of 3 problems (small input error in problem 2); advanced to Round 1.",
		links: [{desc: "Problem Set/Scoreboard", href: "https://www.facebook.com/hackercup/problems.php?round=742632349177460"}]
	},		
	{
		orgid: 3, date: "19/01/2015", name: "USACO January 2015 Silver Division",
		desc: "Achieved one of 42 perfect scores and was promoted to the Gold division.",
		links: [{desc: "Editorial", href: "http://usaco.org/index.php?page=jan15results"}]
	},
	{
		orgid: 4, date: "13/01/2014", name: "DMOPC Exam Time",
		desc: "Solved 4 of 6 problems, finishing 6th of 32.",
		links: [{desc: "Results", href: "http://www.dmoj.ca/contest/dmopc14ce1/ranking/"}]
	},
	{
		orgid: 3, date: "14/12/2014", name: "USACO December 2014 Bronze Division",
		desc: "Achieved one of 86 perfect scores and was promoted to the Silver division.",
		links: [{desc: "Editorial", href: "http://usaco.org/index.php?page=dec14results"}]
	},
	{
		orgid: 2, date: "27/09/2014", name: "North America Qualfier",
		desc: "Another ACM team selection contest. Finished 20th.",
		links:
			[{desc: "Problem Set", href: "http://acm.student.cs.uwaterloo.ca/~acm00/140927/problem_statements.pdf"},
			{desc: "Results", href: "http://acm.student.cs.uwaterloo.ca/~acm00/140927/fixed_NAQ_UW.html"}]
	},
	{
		orgid: 2, date: "20/09/2014", name: "Waterloo Local Contest",
		desc: "A contest for the selection of the UW ACM team. Finished 26th in a very tight spread.",
		links:
			[{desc: "Problem Set", href: "http://acm.student.cs.uwaterloo.ca/~acm00/140920/"},
			{desc: "Results", href: "http://acm.student.cs.uwaterloo.ca/~acm00/140920score.html"}]
	},
	{
		orgid: 0, date: "c. 12/05/2014", name: "CCC 2014 Stage 2",
		desc: "Finished in the Bronze tier among 24 competitors.",
		links:
			[{desc: "Problem Set (Day 1)", href: "http://www.cemc.uwaterloo.ca/contests/computing/2014/stage2/day1.pdf"},
			{desc: "Problem Set (Day 2)", href: "http://www.cemc.uwaterloo.ca/contests/computing/2014/stage2/day2.pdf"},
			{desc: "Results", href: "http://www.cemc.uwaterloo.ca/contests/past_contests/2014/2014CCCStage2Results.pdf"}]
	},
	{
		orgid: 1, date: "10/05/2014", name: "ECOO 2014 Provincial Final",
		desc: "Team underperformed; yet, all were glad to have been given the opportunity.",
		links: [{desc: "Problem Set, Tests, Solutions", href: "http://ecoocs.org/zip/ECOOCS_2014.zip"}]
	},
	{
		orgid: 1, date: "27/04/2014", name: "ECOO 2014 East Semifinal",
		desc: "The Colonel By team solved 3 of 4 problems, advancing to the final round.",
		links: [{desc: "Problem Set, Tests, Solutions", href: "http://ecoocs.org/zip/ECOOCS_2014.zip"}]
	},
	{
		orgid: 1, date: "c. 26/03/2014", name: "ECOO 2014 Boardwide Competition",
		desc:
			"A team competition within the OCDSB alongside teammates from Colonel By. " +
			"Advanced comfortably to the Semifinal round.",
		links: [{desc: "Problem Set, Tests, Solutions", href: "http://ecoocs.org/zip/ECOOCS_2014.zip"}]
	},
	{
		orgid: 0, date: "c. 02/2014", name: "CCC 2014 Stage 1 Senior",
		desc:
			"Finished with a score of 59/75 in an uncharacteristically difficult competition. " +
			"Declared a regional champion ($100 prize) and an invitee to Stage 2.",
		links:
			[{desc: "Problem Set", href: "http://www.cemc.uwaterloo.ca/contests/computing/2014/stage%201/seniorEn.pdf"},
			{desc: "Results", href: "http://www.cemc.uwaterloo.ca/contests/past_contests/2014/2014CCCStage1Results.pdf"}]
	},
	{
		orgid: 0, date: "c. 13/05/2013", name: "CCC 2013 Stage 2",
		desc: "Finished in the Bronze tier among 30 competitors.",
		links:
			[{desc: "Problem Set (Day 1)", href: "http://www.cemc.uwaterloo.ca/contests/computing/2013/stage2/day1.pdf"},
			{desc: "Problem Set (Day 2)", href: "http://www.cemc.uwaterloo.ca/contests/computing/2013/stage2/day2.pdf"},
			{desc: "Results", href: "http://www.cemc.uwaterloo.ca/contests/past_contests/2013/2013CCCStage2Results.pdf"}]
	},
	{
		orgid: 1, date: "c. 20/03/2013", name: "ECOO 2013 Boardwide Competition",
		desc:
			"A team competition within the OCDSB, alongside teammates from Colonel By Secondary School. " +
			"Narrowly missed advancing in a very tight race.",
		links: [{desc: "Problem Set, Tests, Solutions", href: "http://ecoocs.org/zip/ECOOCS_2013.zip"}]
	},
	{
		orgid: 0, date: "c. 02/2013", name: "CCC 2013 Stage 1 Senior",
		desc:
			"Achieved a near-perfect score of 74/75 and was declared a regional champion ($100 prize). " +
			"Was one of 30 invitees to Stage 2 at the University of Waterloo.",
		links:
			[{desc: "Problem Set", href: "http://www.cemc.uwaterloo.ca/contests/computing/2013/stage1/seniorEn.pdf"},
			{desc: "Results", href: "http://www.cemc.uwaterloo.ca/contests/past_contests/2013/2013CCCStage1Results.pdf"}]
	},
	{
		orgid: 0, date: "c. 02/2012", name: "CCC 2012 Stage 1 Junior",
		desc: "Achieved one of five perfect scores in Canada; listed as a regional champion (earning a prize of $100).",
		links:
			[{desc: "Problem Set", href: "http://www.cemc.uwaterloo.ca/contests/computing/2012/stage1/juniorEn.pdf"},
			{desc: "Results", href: "http://www.cemc.uwaterloo.ca/contests/computing/2012/stage1/2012CCCStage1Results.pdf"}]
	},
	{
		orgid: 1, date: "16/04/2011", name: "ECOO 2011 East Semifinal",
		desc: "Competing alongside a team from Lester B. Pearson, solved 2 of 4 problems, but did not advance.",
		links: [{desc: "Problem Set", href: "http://ecoocs.org/contests/ecoo_2011.pdf"}]
	},	{
		orgid: 1, date: "c. 28/03/2011", name: "ECOO 2011 Boardwide Competition",
		desc:
			"A team compeitition within the OCSB. Solved 2 of 4 problems alongside my Lester B. Pearson teammates, " +
			"securing a place in the Semifinal round.",
		links: [{desc: "Problem Set", href: "http://ecoocs.org/contests/ecoo_2011.pdf"}]
	},
	{
		orgid: 0, date: "c. 02/2011", name: "CCC 2011 Stage 1 Junior",
		desc: "Scored roughly 55/75, scoring perfect on three questions and near-perfect on a fourth.",
		links: [{desc: "Problem Set", href: "http://www.cemc.uwaterloo.ca/contests/computing/2011/stage1/juniorEn.pdf"}]
	}];

for(var i = 0, il = cdata.length; i < il; i ++)
	cdata[i].id = i;
