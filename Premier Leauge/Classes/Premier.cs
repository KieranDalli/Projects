using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD42A_Dalli_Kieran
{
    class Premier: League
    {
        public Premier(List<Team> Premierteams): base(Premierteams)
        {

        }

        public override List<Team> GetLeaderboard()
        {
            teams.Sort(delegate (Team a, Team b)
            {
                int result = 0;
                // if a deserves higher placing, result = -1;
                if (a.Points > b.Points)
                {
                    result = - 1;
                }
                // if b deserves higher placing, result = 1;
                if(a.Points  < b.Points)
                {
                    result = 1;
                }

                if(a.Points == b.Points)
                {
                    if(a.GoalDifference() > b.GoalDifference())
                    {
                        result = -1;
                    }

                    else
                    {
                        result = 1;
                    }
                }

                return result;
            });
            return teams;
        }

    }
}
