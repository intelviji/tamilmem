function generate_array(stage)
{
	switch(varisai)
	{
		case "ka":
			if(stage == 1 || stage == 2)
			 memory_array = ['ka','ka','kaa','kaa','ki','ki','kee','kee','ku','ku','kuu','kuu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['kei','kei','keei','keei','kai','kai','koo-o','koo-o','kooooo','kooooo','kow','kow'];
			else if(stage==5)
			{
			 memory_array = ['ka','ka','kaa','kaa','ki','ki','kee','kee','ku','ku','kuu','kuu'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['ka','ka','kaa','kaa','ki','ki','kee','kee','ku','ku','kuu','kuu','kei','kei','keei','keei','kai','kai','koo-o','koo-o','kooooo','kooooo','kow','kow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['ka','ka','kaa','kaa','ki','ki','kee','kee','ku','ku','kuu','kuu','kei','kei','keei','keei','kai','kai','koo-o','koo-o','kooooo','kooooo','kow','kow'];
			}
			else
			 memory_array = ['ka','ka','kaa','kaa','ki','ki','kee','kee','ku','ku','kuu','kuu'];
    
		break;
		case "nga":
			if(stage == 1 || stage == 2)
			 memory_array = ['nga','nga','ngaa','ngaa','ngi2','ngi2','ngii2','ngii2','ngu','ngu','nguu','nguu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['ngaai','ngaai','ngei','ngei','ngeei','ngeei','ngooo','ngooo','ngoooi','ngoooi','ngow','ngow'];
			else if(stage==5)
			{
			 memory_array = ['nga','nga','ngaa','ngaa','ngi2','ngi2','ngii2','ngii2','ngu','ngu','nguu','nguu'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['nga','nga','ngaa','ngaa','ngi2','ngi2','ngii2','ngii2','ngu','ngu','nguu','nguu','ngaai','ngaai','ngei','ngei','ngeei','nheei','ngooo','ngooo','ngoooii','ngoooii','ngow','ngow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['nga','nga','ngaa','ngaa','ngi2','ngi2','ngii2','ngii2','ngu','ngu','nguu','nguu','ngaai','ngaai','ngei','ngei','ngeei','ngeei','ngooo','ngooo','ngoooii','ngoooii','ngow','ngow'];
			}
			else
			 memory_array = ['nga','nga','ngaa','ngaa','ngi2','ngi2','ngii2','ngii2','ngu','ngu','nguu','nguu'];
				
		break;
		case "cha":
			if(stage == 1 || stage == 2)
			 memory_array = ['cha','cha','chaa','chaa','chi','chi','chii','chii','chu','chu','chooo','chooo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['chai','chai','che','che','cheei','cheei','cho','cho','chooi','chooi','chow','chow'];
			else if(stage==5)
			{
			 memory_array = ['cha','cha','chaa','chaa','chi','chi','chii','chii','chu','chu','chooo','chooo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['cha','cha','chaa','chaa','chi','chi','chii','chii','chu','chu','chooo','chooo','chai','chai','che','che','cheei','cheei','cho','cho','choooi','choooi','chow','chow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['cha','cha','chaa','chaa','chi','chi','chii','chii','chu','chu','chooo','chooo','chai','chai','che','che','cheei','cheei','cho','cho','choooi','choooi','chow','chow'];
			}
			else
			 memory_array = ['cha','cha','chaa','chaa','chi','chi','chii','chii','chu','chu','chooo','choo'];
		break;
		case "ngya":
			if(stage == 1 || stage == 2)
			 memory_array = ['ngya','ngya','ngyaa','ngyaa','ngi','ngi','ngii','ngii','zgu','zgu','zguuu','zguuu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['zgaai','zgaai','zge','zge','zgeei','zgeei','zgoo','zgoo','zgooooo','zgooooo','zgow','zgow'];
			else if(stage==5)
			{
			 memory_array = ['ngya','ngya','ngyaa','ngyaa','ngi','ngi','ngii','ngii','zgu','zgu','zguuu','zguuu'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['ngya','ngya','ngyaa','ngyaa','ngi','ngi','ngii','ngii','zgu','zgu','zguuu','zguuu','zgaai','zgaai','zge','zge','zgeei','zgeei','zgoo','zgoo','zgooooo','zgooooo','zgow','zgow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['ngya','ngya','ngyaa','ngyaa','ngi','ngi','ngii','ngii','zgu','zgu','zguuu','zguuu','zgaai','zgaai','zge','zge','zgeei','zgeei','zgoo','zgoo','zgooooo','zgooooo','zgow','zgow'];
			}
			else
			 memory_array = ['ngya','ngya','ngyaa','ngyaa','ngi','ngi','ngii','ngii','zgu','zgu','zguuu','zguuu'];
		break;
		case "da":
			if(stage == 1 || stage == 2)
			 memory_array = ['da','da','daa','daa','de','de','dee','dee','du','du','duuu','duuu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['daai','daai','dei','dei','deei','deei','do','do','doo','doo','dow','dow'];
			else if(stage==5)
			{
			 memory_array = ['da','da','daa','daa','de','de','dee','dee','du','du','duuu','duuu'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['da','da','daa','daa','de','de','dee','dee','du','du','duuu','duuu','daai','daai','dei','dei','deei','deei','do','do','doo','doo','dow','dow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['da','da','daa','daa','de','de','dee','dee','du','du','duuu','duuu','daai','daai','dei','dei','deei','deei','do','do','doo','doo','dow','dow'];
			}
			else
			 memory_array = ['da','da','daa','daa','de','de','dee','dee','du','du','duuu','duuu'];
		break;
		case "naa":
			if(stage == 1 || stage == 2)
			 memory_array = ['naa','naa','naaa','naaa','ni','ni','niii','niii','nu','nu','nuuu','nuuu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['nai','nai','ne','ne','neei','neeei','no','no','noo','noo','nowz','nowz'];
			else if(stage==5)
			{
			 memory_array = ['naa','naa','naaa','naaa','ni','ni','niii','niii','nu','nu','no','no'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['naa','naa','naaa','naaa','ni','ni','niii','niii','nu','nu','noo','noo','nai','nai','ne','ne','neeei','neeei','nowz','nowz','nuuu','nuuu','no','no'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['naa','naa','naaa','naaa','ni','ni','niii','niii','nu','nu','nuuu','nuuu','ne','ne','nai','nai','neeei','neeei','no','no','noo','noo','nowz','nowz'];
			}
			else
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo'];
		break;
		case "tha":
			if(stage == 1 || stage == 2)
			 memory_array = ['tha','tha','thaa','thaa','thi','thi','thee','thee','thu','thu','thoo','thoo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['thai','thai','thea','thea','theei','theei','tho','tho','thoe','thoe','thow','thow'];
			else if(stage==5)
			{
			 memory_array = ['tha','tha','thaa','thaa','thi','thi','thee','thee','tho','tho','thai','thai'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['tha','tha','thaa','thaa','thi','thi','thee','thee','thu','thu','thoo','thoo','thai','thai','thea','thea','theei','theei','tho','tho','thoe','thoe','thow','thow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['tha','tha','thaa','thaa','thi','thi','thee','thee','thu','thu','thoo','thoo','thai','thai','thea','thea','theei','theei','tho','tho','thoe','thoe','thow','thow'];
			}
			else
			 memory_array = ['tha','tha','thaa','thaa','thi','thi','thee','thee','thu','thu','thoo','thoo'];
		break;
		case "na1":
			if(stage == 1 || stage == 2)
			 memory_array = ['na1','na1','naa2','naa2','ni2','ni2','nii2','nii2','nu2','nu2','Noo2','Noo2'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['nai2','nai2','ne2','ne2','nee2','nee2','no2','no2','no3','no3','now2','now2'];
			else if(stage==5)
			{
			 memory_array = ['na1','na1','naa2','naa2','ni2','ni2','nii2','nii2','nu2','nu2','Noo2','Noo2'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['na1','na1','naa2','naa2','ni2','ni2','nii2','nii2','nu2','nu2','Noo2','Noo2','nai2','nai2','ne2','ne2','nee2','nee2','no2','no2','no3','no3','now2','now2'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['na1','na1','naa2','naa2','ni2','ni2','nii2','nii2','nu2','nu2','Noo2','Noo2','nai2','nai2','ne2','ne2','nee2','nee2','no2','no2','no3','no3','now2','now2'];
			}
			else
			 memory_array = ['na1','na1','naa2','naa2','ni2','ni2','nii2','nii2','nu2','nu2','Noo2','Noo2'];
		break;
		case "pa":
			if(stage == 1 || stage == 2)
			 memory_array = ['pa','pa','paa','paa','pi','pi','pee','pee','pu','pu','poo','poo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['pai','pai','pea','pea','peai','peai','po2','po2','pooo2','pooo2','pow','pow'];
			else if(stage==5)
			{
			 memory_array = ['pa','pa','paa','paa','pi','pi','pee','pee','pu','pu','poo','poo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['pa','pa','paa','paa','pi','pi','pee','pee','pu','pu','poo','poo','pai','pai','pea','pea','peai','peai','po2','po2','pooo2','pooo2','pow','pow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['pa','pa','paa','paa','pi','pi','pee','pee','pu','pu','poo','poo','pai','pai','pea','pea','peai','peai','po2','po2','pooo2','pooo2','pow','pow'];
			}
			else
			 memory_array = ['pa','pa','paa','paa','pi','pi','pee','pee','pu','pu','poo','poo'];
		break;
		case "ma":
			if(stage == 1 || stage == 2)
			 memory_array = ['ma','ma','maa','maa','mi','mi','mee','mee','mu','mu','moo','moo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['mai','mai','may','may','maai','maai','mo2','mo2','moo2','moo2','mow','mow'];
			else if(stage==5)
			{
			 memory_array = ['ma','ma','maa','maa','mi','mi','mee','mee','mu','mu','moo','moo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['ma','ma','maa','maa','mi','mi','mee','mee','mu','mu','moo','moo','mai','mai','may','may','maai','maai','mo2','mo2','moo2','moo2','mow','mow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['ma','ma','maa','maa','mi','mi','mee','mee','mu','mu','moo','moo','mai','mai','may','may','maai','maai','mo2','mo2','moo2','moo2','mow','mow'];
			}
			else
			 memory_array = ['ma','ma','maa','maa','mi','mi','mee','mee','mu','mu','moo','moo'];
		break;
		case "ya":
			if(stage == 1 || stage == 2)
			 memory_array = ['ya','ya','yaa','yaa','ye','ye','yee','yee','yu','yu','yuu','yuu'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['yai','yai','yea','yea','yeai','yeai','yo','yo','yoo','yoo','yow','yow'];
			else if(stage==5)
			{
			 memory_array = ['ya','ya','yaa','yaa','ye','ye','yee','yee','yo','yo','yea','yea'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['ya','ya','yaa','yaa','ye','ye','yee','yee','yu','yu','yuu','yuu','yai','yai','yea','yea','yeai','yeai','yo','yo','yoo','yoo','yow','yow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['ya','ya','yaa','yaa','ye','ye','yee','yee','yu','yu','yuu','yuu','yai','yai','yea','yea','yeai','yeai','yo','yo','yoo','yoo','yow','yow'];
			}
			else
			 memory_array = ['ya','ya','yaa','yaa','ye','ye','yee','yee','yu','yu','yuu','yuu'];
		break;
		case "va":
			if(stage == 1 || stage == 2)
			 memory_array = ['va','va','vaa','vaa','vi','vi','vii','vii','vu','vu','voo','voo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['vai','vai','vea','vea','veeaa','veeaa','vo','vo','vooo','vooo','vow','vow'];
			else if(stage==5)
			{
			 memory_array = ['va','va','vaa','vaa','vi','vi','vii','vii','vu','vu','vai','vai'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['va','va','vaa','vaa','vi','vi','vii','vii','vu','vu','voo','voo','vai','vai','vea','vea','veeaa','veeaa','vo','vo','vooo','voooo','vow','vow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['va','va','vaa','vaa','vi','vi','vii','vii','vu','vu','voo','voo','vai','vai','vea','vea','veeaa','veeaa','vo','vo','vooo','vooo','vow','vow'];
			}
			else
			 memory_array = ['va','va','vaa','vaa','vi','vi','vii','vii','vu','vu','voo','voo'];
		break;
		case "ra":
			if(stage == 1 || stage == 2)
			 memory_array = ['ra','ra','raa','raa','ri','ri','rii','rii','ru','ru','roo','roo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['rai','rai','rei','rei','reai','reai','ro','ro','rooo','rooo','row','row'];
			else if(stage==5)
			{
			 memory_array = ['ra','ra','raa','raa','ri','ri','rii','rii','ru','ru','roo','roo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['ra','ra','raa','raa','ri','ri','rii','rii','ru','ru','roo','roo','rai','rai','rei','rei','reai','reai','ro','ro','rooo','rooo','row','row'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['ra','ra','raa','raa','ri','ri','rii','rii','ru','ru','roo','roo','rai','rai','rei','rei','reai','reai','ro','ro','rooo','rooo','row','row'];
			}
			else
			 memory_array = ['ra','ra','raa','raa','ri','ri','rii','rii','ru','ru','roo','roo'];
		break;
		case "la":
			if(stage == 1 || stage == 2)
			 memory_array = ['la','la','laa','laa','li','li','lee','lee','lu','lu','loo','loo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['lai','lai','lea','lea','leaa','leaa','low','low','loww','loww','love','love'];
			else if(stage==5)
			{
			 memory_array = ['la','la','laa','laa','li','li','lee','lee','lu','lu','loo','loo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['la','la','laa','laa','li','li','lee','lee','lu','lu','loo','loo','lai','lai','lea','lea','leaa','leaa','low','low','loww','loww','love','love'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['la','la','laa','laa','li','li','lee','lee','lu','lu','loo','loo','lai','lai','lea','lea','leaa','leaa','low','low','loww','loww','love','love'];
			}
			else
			 memory_array = ['la','la','laa','laa','li','li','lee','lee','lu','lu','loo','loo'];
		break;
		case "LLA":
			if(stage == 1 || stage == 2)
			 memory_array = ['LLA','LLA','LLAAA','LLAAA','LLI','LLI','LLEE','LLEE','LOO2','LOO2','LOOO','LOOO'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['LLAI','LLAI','LLEA','LLEA','LEAAI','LEAAI','LLOW','LLOW','LLOOW','LLOOW','LLOOVE','LLOOVE'];
			else if(stage==5)
			{
			 memory_array = ['LLA','LLA','LLAAA','LLAAA','LLI','LLI','LLEE','LLEE','LOO2','LOO2','LOOO','LOOO'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['LLA','LLA','LLAAA','LLAAA','LLI','LLI','LLEE','LLEE','LOO2','LOO2','LOOO','LOOO','LLAI','LLAI','LLEA','LLEA','LEAAI','LEAAI','LLOW','LLOW','LLOOW','LLOOW','LLOOVE','LLOOVE'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['LLA','LLA','LLAAA','LLAAA','LLI','LLI','LLEE','LLEE','LOO2','LOO2','LOOO','LOOO','LLAI','LLAI','LLEA','LLEA','LEAAI','LEAAI','LLOW','LLOW','LLOOW','LLOOW','LLOOVE','LLOOVE'];
			}
			else
			 memory_array = ['LLA','LLA','LLAAA','LLAAA','LLI','LLI','LLEE','LLEE','LOO2','LOO2','LOOO','LOOO'];
		break;
		case "llla":
			if(stage == 1 || stage == 2)
			 memory_array = ['llla','llla','lllaaa','lllaaa','llli','llli','lllee','lllee','lllu','lllu','llloo','llloo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['lllai','lllai','lllea','lllea','llleaa','llleaa','lllow','lllow','llloow','llloow','lllove','lllove'];
			else if(stage==5)
			{
			 memory_array = ['llla','llla','lllaaa','lllaaa','llli','llli','lllee','lllee','lllu','lllu','lllai','lllai'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['llla','llla','lllaaa','lllaaa','llli','llli','lllee','lllee','lllu','lllu','llloo','llloo','lllai','lllai','lllea','lllea','llleaa','llleaa','lllow','lllow','llloow','llloow','lllove','lllove'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['llla','llla','lllaaa','lllaaa','llli','llli','lllee','lllee','lllu','lllu','llloo','llloo','lllai','lllai','lllea','lllea','llleaa','llleaa','lllow','lllow','llloow','llloow','lllove','lllove'];
			}
			else
			 memory_array = ['llla','llla','lllaaa','lllaaa','llli','llli','lllee','lllee','lllu','lllu','llloo','llloo'];
		break;
		case "tra":
			if(stage == 1 || stage == 2)
			 memory_array = ['tra','tra','traa','traa','tri','tri','ttrree','ttrree','tru','tru','troo','troo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['ttrrai','ttrrai','trea','trea','treaa','treaa','trroo','trroo','trrooo','trrooo','trow','trow'];
			else if(stage==5)
			{
			 memory_array = ['tra','tra','traa','traa','tri','tri','ttrree','ttrree','tru','tru','troo','troo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['tra','tra','traa','traa','tri','tri','ttrree','ttrree','tru','tru','troo','troo','ttrrai','ttrrai','trea','trea','treaa','treaa','trroo','trroo','trrooo','trrooo','trow','trow'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['tra','tra','traa','traa','tri','tri','ttrree','ttrree','tru','tru','troo','troo','ttrrai','ttrrai','trea','trea','treaa','treaa','trroo','trroo','trrooo','trrooo','trow','trow'];
			}
			else
			 memory_array = ['tra','tra','traa','traa','tri','tri','ttrree','ttrree','tru','tru','troo','troo'];
		break;
		case "nna":
			if(stage == 1 || stage == 2)
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo'];
			else if(stage == 3 || stage == 4)
			 memory_array = ['nnai','nnai','nnea','nnea','nneaa','nneaa','nnow','nnow','nnooww','nnooww','nnoove','nnoove'];
			else if(stage==5)
			{
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo'];
			}
			else if(stage==6 || stage == 7 || stage == 8)
			{
			jcount = 4;
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo','nnai','nnai','nnea','nnea','nneaa','nneaa','nnow','nnow','nnooww','nnooww','nnoove','nnoove'];
			}

			else if(stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo','nnai','nnai','nnea','nnea','nneaa','nneaa','nnow','nnow','nnooww','nnooww','nnoove','nnoove'];
			}
			else
			 memory_array = ['nna','nna','nnaa','nnaa','nni','nni','nnee','nnee','nnu','nnu','nnoo','nnoo'];
		break;
	}
}
function generate_vertical_array(stage)
{
	switch(varisai)
	{
		case "ka":
			if(stage == 1)
			 memory_array = ['ka','ka','nga','nga','cha','cha','ngya','ngya','da','da','naa','naa'];
			else if(stage == 2 )
			 memory_array = ['tha','tha','na1','na1','pa','pa','ma','ma','ya','ya','ra','ra'];
			else if(stage == 3)
			 memory_array = ['la','la','LLA','LLA','va','va','llla','llla','tra','tra','nna','nna'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['ka','ka','nga','nga','cha','cha','ngya','ngya','da','da','naa','naa','tha','tha','na1','na1','pa','pa','ma','ma','ya','ya','ra','ra'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['la','la','LLA','LLA','va','va','llla','llla','tra','tra','nna','nna','ka','ka','nga','nga','cha','cha','ngya','ngya','da','da','naa','naa'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['la','la','LLA','LLA','va','va','llla','llla','tra','tra','nna','nna','ka','ka','nga','nga','cha','cha','ngya','ngya','da','da','naa','naa','tha','tha','na1','na1','pa','pa','ma','ma','ya','ya','ra','ra'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['la','la','LLA','LLA','va','va','llla','llla','tra','tra','nna','nna','ka','ka','nga','nga','cha','cha','ngya','ngya','da','da','naa','naa','tha','tha','na1','na1','pa','pa','ma','ma','ya','ya','ra','ra'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kaa":
			if(stage == 1)
			 memory_array = ['kaa','kaa','ngaa','ngaa','chaa','chaa','ngyaa','ngyaa','daa','daa','naaa','naaa'];
			else if(stage == 2 )
			 memory_array = ['thaa','thaa','naa2','naa2','paa','paa','maa','maa','yaa','yaa','raa','raa'];
			else if(stage == 3)
			 memory_array = ['laa','laa','LLAAA','LLAAA','vaa','vaa','lllaaa','lllaaa','traa','traa','nnaa','nnaa'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kaa','kaa','ngaa','ngaa','chaa','chaa','ngyaa','ngyaa','daa','daa','naaa','naaa','thaa','thaa','naa2','naa2','paa','paa','maa','maa','yaa','yaa','raa','raa'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['laa','laa','LLAAA','LLAAA','vaa','vaa','lllaaa','lllaaa','traa','traa','nnaa','nnaa','kaa','kaa','ngaa','ngaa','chaa','chaa','ngyaa','ngyaa','daa','daa','naaa','naaa'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['laa','laa','LLAAA','LLAAA','vaa','vaa','lllaaa','lllaaa','traa','traa','nnaa','nnaa','kaa','kaa','ngaa','ngaa','chaa','chaa','ngyaa','ngyaa','daa','daa','naaa','naaa','thaa','thaa','naa2','naa2','paa','paa','maa','maa','yaa','yaa','raa','raa'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['laa','laa','LLAAA','LLAAA','vaa','vaa','lllaaa','lllaaa','traa','traa','nnaa','nnaa','kaa','kaa','ngaa','ngaa','chaa','chaa','ngyaa','ngyaa','daa','daa','naaa','naaa','thaa','thaa','naa2','naa2','paa','paa','maa','maa','yaa','yaa','raa','raa'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "ki":
			if(stage == 1)
			 memory_array = ['ki','ki','ngi2','ngi2','chi','chi','ngi','ngi','de','de','ni','ni'];
			else if(stage == 2 )
			 memory_array = ['thi','thi','ni2','ni2','pi','pi','mi','mi','ye','ye','ri','ri'];
			else if(stage == 3)
			 memory_array = ['li','li','LLI','LLI','vi','vi','llli','llli','tri','tri','nni','nni'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['ki','ki','ngi2','ngi2','chi','chi','ngi','ngi','de','de','ni','ni','thi','thi','ni2','ni2','pi','pi','mi','mi','ye','ye','ri','ri'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['li','li','LLI','LLI','vi','vi','llli','llli','tri','tri','nni','nni','ki','ki','ngi2','ngi2','chi','chi','ngi','ngi','de','de','ni','ni'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['li','li','LLI','LLI','vi','vi','llli','llli','tri','tri','nni','nni','ki','ki','ngi2','ngi2','chi','chi','ngi','ngi','de','de','ni','ni','thi','thi','ni2','ni2','pi','pi','mi','mi','ye','ye','ri','ri'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['li','li','LLI','LLI','vi','vi','llli','llli','tri','tri','nni','nni','ki','ki','ngi2','ngi2','chi','chi','ngi','ngi','de','de','ni','ni','thi','thi','ni2','ni2','pi','pi','mi','mi','ye','ye','ri','ri'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kee":
			if(stage == 1)
			 memory_array = ['kee','kee','ngii2','ngii2','chii','chii','ngii','ngii','dee','dee','niii','niii'];
			else if(stage == 2 )
			 memory_array = ['thee','thee','nii2','nii2','pee','pee','mee','mee','yee','yee','rii','rii'];
			else if(stage == 3)
			 memory_array = ['lee','lee','LLEE','LLEE','vii','vii','lllee','lllee','ttrree','ttrree','nnee','nnee'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kee','kee','ngii2','ngii2','chii','chii','ngii','ngii','dee','dee','niii','niii','thee','thee','nii2','nii2','pee','pee','mee','mee','yee','yee','rii','rii'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['lee','lee','LLEE','LLEE','vii','vii','lllee','lllee','ttrree','ttrree','nnee','nnee','kee','kee','ngii2','ngii2','chii','chii','ngii','ngii','dee','dee','niii','niii'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['lee','lee','LLEE','LLEE','vii','vii','lllee','lllee','ttrree','ttrree','nnee','nnee','kee','kee','ngii2','ngii2','chii','chii','ngii2','ngii2','dee','dee','niii','niii','thee','thee','nii2','nii2','pee','pee','mee','mee','yee','yee','rii','rii'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['lee','lee','LLEE','LLEE','vii','vii','lllee','lllee','ttrree','ttrree','nnee','nnee','kee','kee','ngii2','ngii2','chii','chii','ngii2','ngii2','dee','dee','niii','niii','thee','thee','nii2','nii2','pee','pee','mee','mee','yee','yee','rii','rii'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "ku":
			if(stage == 1)
			 memory_array = ['ku','ku','ngu','ngu','chu','chu','zgu','zgu','du','du','nu','nu'];
			else if(stage == 2 )
			 memory_array = ['thu','thu','nu2','nu2','pu','pu','mu','mu','yu','yu','ru','ru'];
			else if(stage == 3)
			 memory_array = ['lu','lu','LOO2','LOO2','vu','vu','lllu','lllu','tru','tru','nnu','nnu'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['ku','ku','ngu','ngu','chu','chu','zgu','zgu','du','du','nu','nu','thu','thu','nu2','nu2','pu','pu','mu','mu','yu','yu','ru','ru'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['lu','lu','LOO2','LOO2','vu','vu','lllu','lllu','tru','tru','nnu','nnu','ku','ku','ngu','ngu','chu','chu','zgu','zgu','du','du','nu','nu'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['lu','lu','LOO2','LOO2','vu','vu','lllu','lllu','tru','tru','nnu','nnu','ku','ku','ngu','ngu','chu','chu','zgu','zgu','du','du','nu','nu','thu','thu','nu2','nu2','pu','pu','mu','mu','yu','yu','ru','ru'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['lu','lu','LOO2','LOO2','vu','vu','lllu','lllu','tru','tru','nnu','nnu','ku','ku','ngu','ngu','chu','chu','zgu','zgu','du','du','nu','nu','thu','thu','nu2','nu2','pu','pu','mu','mu','yu','yu','ru','ru'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kuu":
			if(stage == 1)
			 memory_array = ['kuu','kuu','nguu','nguu','chooo','chooo','zguuu','zguuu','duuu','duuu','nuuu','nuuu'];
			else if(stage == 2 )
			 memory_array = ['thoo','thoo','noo2','noo2','poo','poo','moo','moo','yuu','yuu','roo','roo'];
			else if(stage == 3)
			 memory_array = ['loo','loo','LOOO','LOOO','voo','voo','llloo','llloo','troo','troo','nnoo','nnoo'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kuu','kuu','nguu','nguu','chooo','chooo','zguuu','zguuu','duuu','duuu','nuuu','nuuu','thoo','thoo','noo2','noo2','poo','poo','moo','moo','yuu','yuu','roo','roo'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['loo','loo','LOOO','LOOO','voo','voo','llloo','llloo','troo','troo','nnoo','nnoo','kuu','kuu','nguu','nguu','chooo','chooo','zguuu','zguuu','duuu','duuu','nuuu','nuuu'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['loo','loo','LOOO','LOOO','voo','voo','llloo','llloo','troo','troo','nnoo','nnoo','kuu','kuu','nguu','nguu','chooo','choo','zguuu','zguuu','duuu','duuu','nuuu','nuuu','thoo','thoo','noo2','noo2','poo','poo','moo','moo','yuu','yuu','roo','roo'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['loo','loo','LOOO','LOOO','voo','voo','llloo','llloo','troo','troo','nnoo','nnoo','kuu','kuu','nguu','nguu','chooo','chooo','zguuu','zguuu','duuu','duuu','nuuu','nuuu','thoo','thoo','noo2','noo2','poo','poo','moo','moo','yuu','yuu','roo','roo'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kei":
			if(stage == 1)
			 memory_array = ['kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne'];
			else if(stage == 2 )
			 memory_array = ['thea','thea','ne2','ne2','pea','pea','may','may','yea','yea','rei','rei'];
			else if(stage == 3)
			 memory_array = ['lea','lea','LLEA','LLEA','vea','vea','lllea','lllea','trea','trea','nnea','nnea'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne','thea','thea','ne2','ne2','pea','pea','may','may','yea','yea','rei','rei'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['lea','lea','LLEA','LLEA','vea','vea','lllea','lllea','trea','trea','nnea','nnea','kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['lea','lea','LLEA','LLEA','vea','vea','lllea','lllea','trea','trea','nnea','nnea','kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne','thea','thea','ne2','ne2','pea','pea','may','may','yea','yea','rei','rei'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['lea','lea','LLEA','LLEA','vea','vea','lllea','lllea','trea','trea','nnea','nnea','kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne','thea','thea','ne2','ne2','pea','pea','may','may','yea','yea','rei','rei'];

			}
			else
			 memory_array = ['kei','kei','ngei','ngei','che','che','zge','zge','dei','dei','ne','ne'];
		break;
		case "keei":
			if(stage == 1)
			 memory_array = ['keei','keei','ngeei','ngeei','cheei','cheei','zgeei','zgeei','deei','deei','neeei','neeei'];
			else if(stage == 2 )
			 memory_array = ['theei','theei','nee2','nee2','peai','peai','maai','maai','yeai','yeai','reai','reai'];
			else if(stage == 3)
			 memory_array = ['leaa','leaa','LEAAI','LEAAI','veeaa','veeaa','llleaa','llleaa','treaa','treaa','nneaa','nneaa'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['keei','keei','ngeei','ngeei','cheei','cheei','zgeei','zgeei','deei','deei','neeei','neeei','theei','theei','nee2','nee2','peai','peai','maai','maai','yeai','yeai','reai','reai'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['leaa','leaa','LEAAI','LEAAI','veeaa','veeaa','llleaa','llleaa','treaa','treaa','nneaa','nneaa','keei','keei','ngeei','ngeei','cheei','cheei','zgeei','zgeei','deei','deei','neeei','neeei'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['leaa','leaa','LEAAI','LEAAI','veeaa','veeaa','llleaa','llleaa','treaa','trea','nneaa','nneaa','keei','keei','ngeei','ngeei','cheei','cheei','zgeei','zgeei','deei','deei','neeei','neeei','theei','theei','nee2','nee2','peai','peai','maai','maai','yeai','yeai','reai','reai'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['leaa','leaa','LEAAI','LEAAI','veeaa','veeaa','llleaa','llleaa','treaa','treaa','nneaa','nneaa','keei','keei','ngeei','ngeei','cheei','cheei','zgeei','zgeei','deei','deei','neeei','neeei','theei','theei','nee2','nee2','peai','peai','maai','maai','yeai','yeai','reai','reai'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kai":
			if(stage == 1)
			 memory_array = ['kai','kai','ngaai','ngaai','chai','chai','zgaai','zgaai','daai','daai','nai','nai'];
			else if(stage == 2 )
			 memory_array = ['thai','thai','nai2','nai2','pai','pai','mai','mai','yai','yai','rai','rai'];
			else if(stage == 3)
			 memory_array = ['lai','lai','LLAI','LLAI','vai','vai','lllai','lllai','ttrrai','ttrrai','nnai','nnai'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kai','kai','ngaai','ngaai','chai','chai','zgaai','zgaai','daai','daai','nai','nai','thai','thai','nai2','nai2','pai','pai','mai','mai','yai','yai','rai','rai'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['lai','lai','LLAI','LLAI','vai','vai','lllai','lllai','ttrrai','ttrrai','nnai','nnai','kai','kai','ngaai','ngaai','chai','chai','zgaai','zgaai','daai','daai','nai','nai'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['lai','lai','LLAI','LLAI','vai','vai','lllai','lllai','ttrrai','ttrrai','nnai','nnai','kai','kai','ngaai','ngaai','chai','chai','zgaai','zgaai','daai','daai','nai','nai','thai','thai','nai2','nai2','pai','pai','mai','mai','yai','yai','rai','rai'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['lai','lai','LLAI','LLAI','vai','vai','lllai','lllai','ttrrai','ttrrai','nnai','nnai','kai','kai','ngaai','ngaai','chai','chai','zgaai','zgaai','daai','daai','nai','nai','thai','thai','nai2','nai2','pai','pai','mai','mai','yai','yai','rai','rai'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "koo-o":
			if(stage == 1)
			 memory_array = ['koo-o','koo-o','ngooo','ngooo','cho','cho','zgoo','zgoo','do','do','no','no'];
			else if(stage == 2 )
			 memory_array = ['tho','tho','no2','no2','po2','po2','mo2','mo2','yo','yo','ro','ro'];
			else if(stage == 3)
			 memory_array = ['low','low','LLOW','LLOW','vo','vo','lllow','lllow','trroo','trroo','nnow','nnow'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['koo-o','koo-o','ngooo','ngooo','cho','cho','zgoo','zgoo','do','do','no','no','tho','tho','no2','no2','po2','po2','mo2','mo2','yo','yo','ro','ro'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['low','low','LLOW','LLOW','vo','vo','lllow','lllow','trroo','trroo','nnow','nnow','koo-o','koo-o','ngooo','ngooo','cho','cho','zgoo','zgoo','do','do','no','no'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['low','low','LLOW','LLOW','vo','vo','lllow','lllow','trroo','trroo','nnow','nnow','koo-o','koo-o','ngooo','ngooo','cho','cho','zgoo','zgoo','do','do','no','no','tho','tho','no2','no2','po2','po2','mo2','mo2','yo','yo','ro','ro'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['low','low','LLOW','LEAAI','vo','vo','lllow','lllow','trroo','trroo','nnow','nnow','koo-o','koo-o','ngooo','ngooo','cho','cho','zgoo','zgoo','do','do','no','no','tho','tho','no2','no2','po2','po2','mo2','mo2','yo','yo','ro','ro'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kooooo":
			if(stage == 1)
			 memory_array = ['kooooo','kooooo','ngoooii','ngoooii','choooi','choooi','zgooooo','zgooooo','doo','doo','noo','noo'];
			else if(stage == 2 )
			 memory_array = ['thoe','thoe','no3','no3','pooo2','pooo2','moo2','moo2','yoo','yoo','rooo','rooo'];
			else if(stage == 3)
			 memory_array = ['loww','loww','LLOOW','LLOOW','vooo','vooo','llloow','llloow','trrooo','trrooo','nnooww','nnooww'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kooooo','kooooo','ngoooii','ngoooii','choooi','choooi','zgooooo','zgooooo','doo','doo','noo','noo','thoe','thoe','no3','no3','pooo2','pooo2','moo2','moo2','yoo','yoo','rooo','rooo'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['loww','loww','LLOOW','LLOOW','vooo','vooo','llloow','llloow','trrooo','trrooo','nnooww','nnooww','kooooo','kooooo','ngoooii','ngoooii','choooi','choooi','zgooooo','zgooooo','doo','doo','noo','noo'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['loww','loww','LLOOW','LLOOW','vooo','vooo','llloow','llloow','trrooo','trrooo','nnooww','nnooww','kooooo','kooooo','ngoooii','ngoooii','choooi','choooi','zgooooo','zgooooo','doo','doo','noo','noo','thoe','thoe','no3','no3','poo2','poo2','moo2','moo2','yoo','yoo','rooo','rooo'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['loww','loww','LLOOW','LLOOW','vooo','vooo','llloow','llloow','trrooo','trrooo','nnooww','nnooww','kooooo','kooooo','ngoooii','ngoooii','choooi','choooi','zgooooo','zgooooo','doo','doo','noo','noo','thoe','thoe','no3','no3','poo2','poo2','moo2','moo2','yoo','yoo','roo','roo'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		case "kow":
			if(stage == 1)
			 memory_array = ['kow','kow','ngow','ngow','chow','chow','zgow','zgow','dow','dow','now','now'];
			else if(stage == 2 )
			 memory_array = ['thow','thow','now2','now2','pow','pow','mow','mow','yow','yow','row','row'];
			else if(stage == 3)
			 memory_array = ['love','love','LLOOVE','LLOOVE','vow','vow','lllove','lllove','trow','trow','nnoove','nnoove'];
			else if(stage == 4)
			{
			jcount = 4;
			 memory_array = ['kow','kow','ngow','ngow','chow','chow','zgow','zgow','dow','dow','now','now','thow','thow','now2','now2','pow','pow','mow','mow','yow','yow','row','row'];

			}
			else if(stage==5)
			{
			 jcount = 4;
			 memory_array = ['love','love','LLOOVE','LLOOVE','vow','vow','lllove','lllove','trow','trow','nnoove','nnoove','kow','kow','ngow','ngow','chow','chow','zgow','zgow','dow','dow','now','now'];

			}
			else if(stage==6 || stage == 7 )
			{
			jcount = 4;
			  memory_array = ['love','love','LLOOVE','LLOOVE','vow','vow','lllove','lllove','trow','trow','nnoove','nnoove','kow','kow','ngow','ngow','chow','chow','zgow','zgow','dow','dow','now','now','thow','thow','now2','now2','pow','pow','mow','mow','yow','yow','row','row'];

			}

			else if(stage == 8 || stage==9 || stage == 10 )
			{
			jcount = 6;
			 memory_array = ['love','love','LLOOVE','LLOOVE','vow','vow','lllove','lllove','trow','trow','nnoove','nnoove','kow','kowu','ngow','ngow','chow','chow','zgow','zgow','dow','dow','now','now','thuow','thow','now2','now2','pow','pow','mow','mow','yow','yow','row','row'];

			}
			else
			 memory_array = ['a','a','aa','aa','e','e','ee','ee','u','u','uu','uu'];
		break;
		
	}
}