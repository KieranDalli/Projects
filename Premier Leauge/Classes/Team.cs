using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD42A_Dalli_Kieran
{
    class Team
    {
        //creating propfull properties
        private string teamName;

        public string Name
        {
            get { return teamName; }
            set { teamName = value; }
        }

        private int teamPoints;

        public int Points
        {
            get { return teamPoints; }
            set { teamPoints = value; }
        }

        private int goalsForTeam;

        public int GoalsFor
        {
            get { return goalsForTeam; }
            set { goalsForTeam = value; }
        }

        private int goalsAgainstTeam;

        public int GoalsAgainst
        {
            get { return goalsAgainstTeam; }
            set { goalsAgainstTeam = value; }
        }



        //method to find goal difference
        public int GoalDifference()
        {
            return goalsForTeam - goalsAgainstTeam;
        }


        //constructer that accepts teamName and initialises everything else as 0
        public Team (string aTeamName)
        {
            teamName = aTeamName;
            teamPoints = 0;
            goalsForTeam = 0;
            goalsAgainstTeam = 0;
        }
    }
}
