using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD42A_Dalli_Kieran
{
    abstract class League 
    {
        //create new list from the Fixture class
        public List<Fixture> Fixtures = new List<Fixture>();
        //create new list from the Team class
        public List<Team> teams = new List<Team>();

        public abstract List<Team> GetLeaderboard();

        //constructor
        public League(List<Team>LTeams)
        {
            this.teams = LTeams;

            //for loop to keep looping until there arent any more home teams
            for( int LHome = 0; LHome < LTeams.Count; LHome++)
            {
                //for loop to keep looping until there arent any more away teams
                for (int LAway = 0;  LAway < LTeams.Count; LAway++)
                {
                    //if statement to check wether the away team is different from the home team so they do not go against themselves
                    if(LAway != LHome)
                    {
                        //if they are different then add the teams to the Fixtures list
                        Fixtures.Add(new Fixture(LTeams[LHome], LTeams[LAway]));
                    }
                }
            }
        }
    }
}
