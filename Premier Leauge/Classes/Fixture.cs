using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD42A_Dalli_Kieran
{
    class Fixture 
    {
        //creating team properties
        public Team HomeTeam;
        public Team AwayTeam;

        public Fixture(Team home, Team Away)
        {
            HomeTeam = home;
            AwayTeam = Away;
        }

        //creating result property
        private string result;
        
        //find result
        public string Result
        {

            get { return result; }
            set { result = value;
                //creating empty string
                string score = "";
                //finding index of "-"
                int index = result.IndexOf('-');
                
                //looping until "-" is found
                for(int i = 0; i<index; i++)
                {
                    //temporarily adding value to score
                    score = score + result[i];
                }

                //Giving HomeScore the value of score then converting score to integer
                int HomeScore = Convert.ToInt32(score);

                //adding value to home's Goals For
                HomeTeam.GoalsFor = HomeTeam.GoalsFor + HomeScore;

                //adding value to away's Goals Against
                AwayTeam.GoalsAgainst = AwayTeam.GoalsAgainst + HomeScore;
                
                //resetting score to an empty string
                score = "";

                //looping until the end of the string
                for(int i = index+1; i<result.Length; i++)
                {
                    //temporarily adding value to score
                    score = score + result[i];
                }

                //Giving AwayScore the value of score then converting score to integer
                int AwayScore  = Convert.ToInt32(score);
                //adding value to away's Goals For
                AwayTeam.GoalsFor = AwayTeam.GoalsFor + AwayScore;
                //adding value to home's Goals Against
                HomeTeam.GoalsAgainst = HomeTeam.GoalsAgainst + AwayScore;


                //performing calculations
                //if HomeScore is bigger than AwayScore add 3 Points to the HomeTeam
                if (HomeScore > AwayScore)
                {
                    HomeTeam.Points = HomeTeam.Points + 3;
                }
                //if HomeScore is smaller than AwayScore add 3 Points to the HomeTeam
                else if (AwayScore > HomeScore)
                {
                    AwayTeam.Points =AwayTeam.Points + 3;
                }
                //if AwayScore is equal to HomeScore Add 1 Point to both AwayTeam and HomeTeam
                else if( AwayScore == HomeScore)
                {
                    AwayTeam.Points = AwayTeam.Points + 1;
                    HomeTeam.Points = HomeTeam.Points + 1;
                }
            }
        }

    }
}
